// Add this to your script.js file

function initializeAboutSection() {
    // About content paths
    const aboutContentPaths = {
        now: 'content/about-now.md',
        bio: 'content/about-bio.md'
    };
    
    // DOM elements
    const aboutContentElement = document.getElementById('about-content');
    const aboutLinks = document.querySelectorAll('#about-head-links .clickable');
    const aboutMainLink = document.querySelector('.sub-nav .nav .horizontal .clickable');
    const aboutActiveBreadcrumb = document.getElementById('about-active-breadcrumb');
    
    // Function to load about content
    function loadAboutContent(section) {
        const contentPath = aboutContentPaths[section];
        if (!contentPath) return;

        // Fade out current content
        aboutContentElement.style.opacity = '0';

        setTimeout(() => {
            fetch(contentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load content for ${section}`);
                    }
                    return response.text();
                })
                .then(markdownText => {
                    aboutContentElement.innerHTML = marked.parse(markdownText);
                    // Fade in new content
                    aboutContentElement.style.opacity = '1';
                })
                .catch(error => {
                    console.error('Error loading about content:', error);
                    aboutContentElement.innerHTML = `<div class="error">Failed to load content. Please try again later.</div>`;
                    // Fade in error message
                    aboutContentElement.style.opacity = '1';
                });
        }, 300); // Wait for fade out transition
    }
    
    // Set default content (Now)
    loadAboutContent('now');
    aboutActiveBreadcrumb.textContent = 'Now';
    
    // Update active link - set 'now' as active by default
    updateActiveAboutLink('now');
    
    // Update active link function
    function updateActiveAboutLink(section) {
        aboutLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.about === section) {
                link.classList.add('active');
            }
        });
    }
    
    // Set up link event listeners with preventDefault to avoid page reload
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const section = this.dataset.about;
            
            // Update breadcrumb
            aboutActiveBreadcrumb.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            
            // Load new content
            loadAboutContent(section);
                
                // Update active link
                updateActiveAboutLink(section);
                
                // Scroll if needed
                smoothScrollTo(document.querySelector('.sub-nav:last-of-type'), 360);
        });
    });
    
    // Main "About" link should do nothing
    aboutMainLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Do nothing when clicking "About" as per requirement
    });
    
    // Add fade transition for content
    aboutContentElement.style.transition = 'opacity 0.3s ease';
    aboutContentElement.style.opacity = '1';
}

// Add this to your existing smoothScrollTo function if it's not already there
function smoothScrollTo(element, threshold) {
    if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < threshold) {
            window.scrollTo({
                top: window.scrollY + rect.top - 20,
                behavior: 'smooth'
            });
        }
    }
}

// Call this in your DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code...
    
    // Initialize About section
    initializeAboutSection();
});