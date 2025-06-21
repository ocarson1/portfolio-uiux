document.addEventListener('DOMContentLoaded', function () {
    // Fade in the whole app on load
    document.querySelector('.App').classList.add('loaded');

    // Background vector fade effect
    const bgVector = document.querySelector('.bg-vector');
    const fadeStartPoint = 800; // Start fading at 200px scroll
    const fadeEndPoint = 1100;   // Completely faded out at 600px scroll

    function updateBgVectorOpacity() {
        const scrollY = window.scrollY;
        let opacity = 0.05; // Default opacity

        if (scrollY > fadeStartPoint) {
            const fadeProgress = Math.min((scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint), 1);
            opacity = 0.05 * (1 - fadeProgress);
        }

        bgVector.style.opacity = opacity;
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateBgVectorOpacity);

    // Project data - now with a featuredStatus property and slug
    const projects = [
        {
            id: 1,
            title: "Warp",
            slug: "warp",
            date: "Current",
            description: "Creating a terminal customization interface for software engineers, integrating AI",
            tags: ["UI Design", "Product Team"],
            content: "./content/warp.md",
            preview: "./images/warp/preview.png",
            alt: "three custom theme cards made with Warp",
            status: "active",
            featuredStatus: "Featured"
        },
        {
            id: 2,
            title: "RIHousing",
            slug: "rihousing",
            date: "February 2025",
            description: "Redesigning a useful housing tool for Rhode Islanders",
            tags: ["Web Design", "Design Systems"],
            content: "./content/rihousing.md",
            preview: "./images/rihousing/preview.png",
            alt: "laptop and phone previews of a redesigned RIHousing site",
            status: "active",
            featuredStatus: "Featured"
        },
        {
            id: 3,
            title: "Wittern",
            slug: "wittern",
            date: "Summer 2024",
            description: "Understanding a vending machine experience based on interviews with students",
            tags: ["User Personas", "Interviewing"],
            content: "./content/wittern.md",
            preview: "./images/wittern/preview.png",
            alt: "hand drawn panel of a user journey with a Wittern vending machine",
            status: "active",
            featuredStatus: "Featured"
        },
        {
            id: 4,
            title: "VSCode",
            slug: "vscode",
            date: "Summer 2024",
            description: "Improving a component in the most popular code editor",
            tags: ["Accessibility", "UI Components"],
            content: "./content/vscode.md",
            preview: "./images/vscode/preview.png",
            alt: "VSCode logo",
            status: "active",
            featuredStatus: "More"
        },
        {
            id: 4,
            title: "Eternal September",
            slug: "eternal-september",
            date: "Summer 2024",
            description: "Improving a component in the most popular code editor",
            tags: ["Accessibility", "UI Components"],
            content: "./content/vscode.md",
            preview: "./images/vscode/preview.png",
            alt: "VSCode logo",
            status: "active",
            featuredStatus: "More"
        },
        {
            id: 4,
            title: "Handwoven Youth",
            slug: "handwoven-youth",
            date: "Summer 2024",
            description: "Improving a component in the most popular code editor",
            tags: ["Accessibility", "UI Components"],
            content: "./content/vscode.md",
            preview: "./images/vscode/preview.png",
            alt: "VSCode logo",
            status: "active",
            featuredStatus: "More"
        },
        {
            id: 4,
            title: "AAPI History Museum",
            slug: "vscode",
            date: "Summer 2024",
            description: "Improving a component in the most popular code editor",
            tags: ["Accessibility", "UI Components"],
            content: "./content/vscode.md",
            preview: "./images/vscode/preview.png",
            alt: "VSCode logo",
            status: "active",
            featuredStatus: "More"
        },
        {
            id: 4,
            title: "brown.edu",
            slug: "vscode",
            date: "Summer 2024",
            description: "Improving a component in the most popular code editor",
            tags: ["Accessibility", "UI Components"],
            content: "./content/vscode.md",
            preview: "./images/vscode/preview.png",
            alt: "VSCode logo",
            status: "active",
            featuredStatus: "More"
        }
    ];

    // Tag colors mapping
    const tagColors = {
        // Tags colors would go here
    };

    // DOM elements
    const projectIndex = document.getElementById('project-index');
    const projectContent = document.getElementById('project-content');
    const categoryLinks = document.querySelectorAll('#project-head-links .clickable');
    const selectedProjectsLink = document.getElementById('selected-projects');
    const myName = document.getElementById('logoLink');

    const activeBreadcrumb = document.getElementById('active-breadcrumb');
    const breadcrumbSeparator = document.getElementById('breadcrumb-separator');

    // State
    let activeCategory = 'Featured';
    let activeProject = null;
    const scrollThreshold = 530;
    
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // Set base URL for the project pages
    const baseUrl = window.location.pathname.replace(/\/[^\/]*$/, '/');

    // Check if we were redirected from 404.html (GitHub Pages routing workaround)
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
        // Clear the stored path so it doesn't affect future page loads
        sessionStorage.removeItem('redirectPath');
        
        // Handle the redirect path
        if (redirectPath) {
            const projectSlug = redirectPath.split('/')[0]; // Get the first segment
            const project = projects.find(p => p.slug === projectSlug);
            
            if (project) {
                // We'll display this project after page setup
                setTimeout(() => selectProject(project, true), 100);
            }
        }
    }

    // Initialize the page
    setupEventListeners();
    handleUrlRouting();
    renderAboutSection();

    /**
     * Handle URL routing based on current location
     */
    function handleUrlRouting() {
        // First try hash-based routing (works everywhere)
        const hash = window.location.hash.substring(1);
        if (hash) {
            window.scrollTo({
                top: scrollThreshold
            });
            const projectByHash = projects.find(p => p.slug === hash);
            if (projectByHash) {
                selectProject(projectByHash, false);
                return;
            }
        }
        
        // Default to showing the 'Featured' projects
        selectCategory('Featured', false);
    }

    /**
     * Renders the index of projects
     * @param {Array} projectsToRender - Array of project objects to render
     */
    function renderProjectIndex(projectsToRender) {
        projectIndex.innerHTML = '';
        
        const filteredProjects = projectsToRender.filter(p => activeCategory === 'all' || p.featuredStatus === activeCategory);

        filteredProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
            if (activeCategory === 'More') {
                projectElement.classList.add('more-project-item');
            }
            projectElement.tabIndex = 0;
            projectElement.dataset.id = project.id;
            projectElement.dataset.slug = project.slug;
            
            // Create tags HTML
            const tagsHTML = createTagsHTML(project.tags);
            
            projectElement.innerHTML = `
                <img class="rounded" src='${project.preview}' alt="${project.alt}"></img>
                <div class="item-1">
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <div class="item-title">${project.title}</div>
                    <div class="item-description">${project.description}</div>
                </div>
            `;
            
            projectElement.addEventListener('click', () => {
                selectProject(project, true);
            });

            projectElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault(); // prevent scrolling on Space
                    selectProject(project, true);
                }
            });
            
            projectIndex.appendChild(projectElement);
        });

        // Add navigation button at the bottom
        const navigationButton = document.createElement('div');
        navigationButton.className = 'category-navigation';
        
        if (activeCategory === 'Featured') {
            navigationButton.innerHTML = `
                <button class="category-nav-btn" data-target="More">More →</button>
            `;
        } else if (activeCategory === 'More') {
            navigationButton.innerHTML = `
                <button class="category-nav-btn" data-target="Featured">← Featured</button>
            `;
        }
        
        if (navigationButton.innerHTML) {
            projectIndex.appendChild(navigationButton);
            
            // Add event listener to the navigation button
            const navBtn = navigationButton.querySelector('.category-nav-btn');
            navBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetCategory = e.target.dataset.target;
                selectCategory(targetCategory, true);
                if (window.scrollY > scrollThreshold) {
                    window.scrollTo({
                        top: scrollThreshold,
                    });
                }
            });
        }
    }
    
    /**
     * Creates HTML for tag boxes
     * @param {Array} tags - Array of tag strings
     * @returns {string} - HTML string of tag elements
     */
    function createTagsHTML(tags) {
        if (!tags || !tags.length) return '';
        
        return tags.map(tag => {
            const color = tagColors[tag] || '#888888';
            return `<div class="tag" style="border: 1px solid ${color}">${tag}</div>`;
        }).join('');
    }

    /**
     * Loads project content from markdown file
     * @param {string} contentPath - Path to markdown file
     */
    function loadProjectContent(contentPath) {
        projectContent.innerHTML = ''; // Clear content to prepare for new content
    
        fetch(contentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load content');
                }
                return response.text();
            })
            .then(markdownText => {
                const htmlContent = marked.parse(markdownText);
                projectContent.innerHTML = `
                    <div class="spacer-50"></div>
                    ${htmlContent}
                    <div class="back-to-projects-container">
                        <button id="back-to-projects-btn" class="back-to-projects-btn">Back to ${activeCategory} Projects</button>
                    </div>
                    <div class="spacer-90"></div>
                `;

                // Use a small timeout to allow the DOM to update before triggering the transition
                setTimeout(() => projectContent.classList.add('loaded'), 10);
                
                // Add event listener to the back button
                document.getElementById('back-to-projects-btn').addEventListener('click', function() {
                    selectCategory(activeCategory, true);
                    window.scrollTo({
                        top: scrollThreshold
                    });
                });
            })
            .catch(error => {
                console.error('Error loading content:', error);
                projectContent.innerHTML = `
                    <div class="spacer-50"></div>
                    <div class="error">Failed to load content. Please try again later.</div>
                    <div class="back-to-projects-container">
                        <button id="back-to-projects-btn" class="back-to-projects-btn">Back to ${activeCategory} Projects</button>
                    </div>
                    <div class="spacer-90"></div>
                `;
                
                // Also fade in the error message
                setTimeout(() => projectContent.classList.add('loaded'), 10);

                // Add event listener to the back button even on error
                document.getElementById('back-to-projects-btn').addEventListener('click', function() {
                    selectCategory(activeCategory, true);
                    window.scrollTo({
                        top: scrollThreshold
                    });
                });
            });
    }

    /**
     * Selects a project to display
     * @param {Object} project - Project object to display
     * @param {boolean} pushState - Whether to push a new history state
     */
    function selectProject(project, pushState = true) {
        activeProject = project;
        document.title = `Owen Carson - ${project.title}`;
    
        if (pushState) {
            const state = { projectSlug: project.slug };
            history.pushState(state, ``, `${baseUrl}#${project.slug}`);
        }
    
        // Show project content and hide index
        projectIndex.style.display = 'none';
        projectContent.style.display = 'block';
        projectContent.classList.remove('loaded'); // Reset for fade-in
    
        // Update breadcrumb
        activeBreadcrumb.textContent = project.title;
        activeBreadcrumb.tabIndex = 0;

        breadcrumbSeparator.style.display = 'inline';
    
        // Load and render project content
        loadProjectContent(project.content);

        // const focusTarget = activeBreadcrumb; // adjust as needed
        // if (focusTarget) {
        //     focusTarget.setAttribute('tabindex', '-1'); // ensure it's focusable
        //     focusTarget.focus();
        // }
    
        // Handle scrolling
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > scrollThreshold) {
            window.scrollTo({
                top: scrollThreshold
            });
        }
    
        // Update active category link
        updateActiveCategoryLink(null);
    }

    /**
     * Selects a category to filter projects
     * @param {string} category - The category to select
     * @param {boolean} pushState - Whether to push a new history state
     */
    function selectCategory(category, pushState = true) {
        activeCategory = category;
        activeProject = null;
        
        document.title = 'Owen Carson - Portfolio';

        if (pushState) {
            history.pushState({ category: category }, ``, `${baseUrl}`);
        }
        
        // Fade out current content
        projectIndex.style.opacity = '0';
        
        setTimeout(() => {
            // Update UI
            projectIndex.style.display = 'flex';
            projectContent.style.display = 'none';
            
            // Update breadcrumbs
            activeBreadcrumb.textContent = category;
            breadcrumbSeparator.style.display = 'inline';
            selectedProjectsLink.style.display = 'inline';
            
            // Render projects for the new category
            renderProjectIndex(projects);
            
            // Update active link
            updateActiveCategoryLink(category);
            
            // Fade in new content
            setTimeout(() => {
                projectIndex.style.opacity = '1';
            }, 50);
        }, 300); // Wait for fade out transition
    }
    
    /**
     * Updates the active state of category links
     * @param {string} category - The active category
     */
    function updateActiveCategoryLink(category) {
        categoryLinks.forEach(link => {
            if (link.dataset.category === category) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Sets up all event listeners for the page
     */
    function setupEventListeners() {
        // Project category links
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                selectCategory(category, true);
                if (window.scrollY > scrollThreshold) {
                    window.scrollTo({
                        top: scrollThreshold,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Logo / Name link
        myName.addEventListener('click', (e) => {
            e.preventDefault();
            selectCategory(activeCategory, true);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Main projects breadcrumb
        selectedProjectsLink.addEventListener('click', (e) => {
            e.preventDefault();
            selectCategory('Featured', true);
            if (window.scrollY > scrollThreshold) {
                window.scrollTo({
                    top: scrollThreshold,
                    behavior: 'smooth'
                });
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.projectSlug) {
                const project = projects.find(p => p.slug === e.state.projectSlug);
                if (project) {
                    selectProject(project, false);
                }
            } else if (e.state && e.state.category) {
                selectCategory(e.state.category, false);
            } else {
                // Default state
                selectCategory('Featured', false);
            }
        });
    }

    /**
     * Placeholder for rendering about section
     */
    function renderAboutSection() {
        // Your implementation for about section rendering
    }
});