// Add this to your script.js file

function initializeAboutSection() {
    // About content
    const aboutContent = {
        now: `
        <div class="flex-row">
        <div class="flex-1"><img id="owen-drawing" src='./images/owen.svg' alt="hand drawn stick figure rearranging the name 'Owen'" style="transform: translate3d(120px, 30px, 0px)"></div>
        <div class="flex-1">

        <p> Hi there! </p>
        <br>
        <p>I will be graduating from Brown University this month with a double major in Computer Science and Visual Art.</p>
        <br> 
        <p>This summer, I will be interning in the Smithsonian's Educational Technology department to help make their software accessible for K-12 classrooms.<p>
        <br>
        <p>I'm seeking out full-time and freelance product design opportunities beginning in August. <a style="text-decoration: underline" href="mailto:owenccarson@gmail.com" class="clickable">Let's connect!</a>
 <p> 
        <br>
            <p>Last updated: May 2025</p>
            <div class="spacer-90"></div>
            
            </div>
            </div>
        `,
        bio: `

          <div class="flex-row">
        <div class="flex-1"><img src='./images/owen-cutout.png' alt="Owen Carson" style="width: 300px; transform: translate3d(0px, 0px, 0px)"></div>

        <div class="flex-1">

                  
    <p>I’m a Virginian currently living in Rhode Island. I grew up next door to the DC Metro’s Orange Line, which I am now indebted to for my love of museums, the journey as much as the destination, and 90 Second Pizza.</p>
<br>
<p>I currently study Visual Art and Computer Science at Brown University. I got here after becoming enchanted by both the design aspect of programming and the community aspect of artmaking.</p>
<br>
<p>I now travel along this intersection, and especially love to apply my creativity to (typically mundane) tools for software developers. I’m grateful to have completed relevant coursework not just at Brown, but also Queen Mary University of London and Rhode Island School of Design.</p>
<br>
<p>Last but not least, I am an artist. I am interested in the history of information networks, collage experimentation, and family histories in the American South, Bangkok, and Chicago. Both my art and design practices value transparency, resourcefulness, and care.</p>
<div class="spacer-90"></div>




            </div>

            </div>

        `
        // Removed colophon section as requested
    };
    
    // DOM elements
    const aboutContentElement = document.getElementById('about-content');
    const aboutLinks = document.querySelectorAll('#about-head-links .clickable');
    const aboutMainLink = document.querySelector('.sub-nav .nav .horizontal .clickable');
    const aboutActiveBreadcrumb = document.getElementById('about-active-breadcrumb');
    
    // Set default content (Now)
    aboutContentElement.innerHTML = aboutContent.now;
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