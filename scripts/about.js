// Add this to your script.js file

function initializeAboutSection() {
    // About content
    const aboutContent = {
        now: `
        <div class="flex-row">
        <div class="flex-1"><img src='./images/baby.png'></div>
        <div class="flex-1">

            <p>Currently, I'm working on web development projects focused on creative education and accessibility. I'm based in Providence, RI, where I split my time between client work and personal projects.</p>
            <p>I'm also learning more about generative design and AI tools that can enhance the creative process rather than replace it.</p>
            <p>Last updated: April 2025</p>
            <div class="spacer-90"></div>
            
            </div>
            </div>
        `,
        bio: `

          <div class="flex-row">
        <div class="flex-1"></div>
        <div class="flex-1">

                      <p>I'm a designer and developer with a background in both technical and creative fields. I studied at RISD and Brown University, focusing on the intersection of design, technology, and education.</p>
            <p>My professional journey has taken me through roles at educational institutions, design studios, and tech companies, where I've honed my skills in front-end development, UX design, and creative direction.</p>
            <p>When I'm not coding or designing, you'll find me hiking in New England, experimenting with textile arts, or volunteering with local youth education programs.</p>
            <div class="spacer-90"></div>
            
            </div>
            </div>

        `,
        colophon: `

            <div class="flex-row">
        <div class="flex-1"></img></div>
        <div class="flex-1">

            <p>This site was built with HTML, CSS, and vanilla JavaScript. No frameworks, no libraries (except for marked.js for Markdown parsing).</p>
            <p>Typography: System fonts stack prioritizing clarity and performance.</p>
            <p>Code: Written by hand and with occasional assistance from AI tools.</p>
            <p>Hosting: Deployed via Netlify with continuous integration from GitHub.</p>
            <p>Special thanks to the open source community for inspiration and tools that make the web better.</p>
            <div class="spacer-90"></div>
            
            </div>
            </div>
        `
    };
    
    // DOM elements
    const aboutContentElement = document.getElementById('about-content');
    const aboutLinks = document.querySelectorAll('#about-head-links .clickable');
    const aboutMainLink = document.getElementById('about-main');
    const aboutActiveBreadcrumb = document.getElementById('about-active-breadcrumb');
    
    // Set default content (Now)
    aboutContentElement.innerHTML = aboutContent.now;
    aboutActiveBreadcrumb.textContent = 'Now';
    
    // Update active link
    function updateActiveAboutLink(section) {
        aboutLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.about === section) {
                link.classList.add('active');
            }
        });
    }
    
    // Set up link event listeners
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const section = this.dataset.about;
            
            // Update breadcrumb
            aboutActiveBreadcrumb.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            
            // Fade out current content
            aboutContentElement.style.opacity = '0';
            
            // Wait for fade out, then update content
            setTimeout(() => {
                // Update content
                aboutContentElement.innerHTML = aboutContent[section];
                
                // Fade in new content
                setTimeout(() => {
                    aboutContentElement.style.opacity = '1';
                }, 50);
                
                // Update active link
                updateActiveAboutLink(section);
                
                // Scroll if needed
                smoothScrollTo(document.querySelector('.sub-nav:last-of-type'), 360);
            }, 300);
        });
    });
    
    // Main "About" link resets to default section
    aboutMainLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Set to default section (Now)
        aboutActiveBreadcrumb.textContent = 'Now';
        
        // Fade out current content
        aboutContentElement.style.opacity = '0';
        
        // Wait for fade out, then update content
        setTimeout(() => {
            // Update content
            aboutContentElement.innerHTML = aboutContent.now;
            
            // Fade in new content
            setTimeout(() => {
                aboutContentElement.style.opacity = '1';
            }, 50);
            
            // Update active link
            updateActiveAboutLink('now');
            
            // Scroll if needed
            smoothScrollTo(document.querySelector('.sub-nav:last-of-type'), 360);
        }, 300);
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