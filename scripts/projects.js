document.addEventListener('DOMContentLoaded', function () {
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
            featuredStatus: "More"
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
        }
    ];

    // Tag colors mapping
    const tagColors = {
        // Tags colors would go here
    };

    // DOM elements
    const projectIndex = document.getElementById('project-index');
    const projectContent = document.getElementById('project-content');
    const categoryLinks = document.querySelectorAll('#head-links .clickable');
    const selectedProjectsLink = document.getElementById('selected-projects');
    const myName = document.getElementById('logoLink');

    const activeBreadcrumb = document.getElementById('active-breadcrumb');
    const breadcrumbSeparator = document.getElementById('breadcrumb-separator');

    // State
    let activeCategory = 'all';
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
                // window.scrollTo({
                //     top: scrollThreshold
                // });    
                return;
            }

        }
        
        // Default to showing the index
        renderProjectIndex(projects);
    }

    /**
     * Renders the index of projects
     * @param {Array} projectsToRender - Array of project objects to render
     */
    function renderProjectIndex(projectsToRender) {
        projectIndex.innerHTML = '';
        
        projectsToRender.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
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
        projectContent.innerHTML = '<div class="spacer-50"></div><div class="loading">Loading...</div>';
    
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
                        <button id="back-to-projects-btn" class="back-to-projects-btn">Back to Featured Projects</button>
                    </div>
                    <div class="spacer-90"></div>
                `;
                
                // Add event listener to the back button
                document.getElementById('back-to-projects-btn').addEventListener('click', function() {
                    selectCategory('all', true);
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
                        <button id="back-to-projects-btn" class="back-to-projects-btn">Back to Featured Projects</button>
                    </div>
                    <div class="spacer-90"></div>
                `;
                
                // Add event listener to the back button even on error
                document.getElementById('back-to-projects-btn').addEventListener('click', function() {
                    selectCategory('all', true);
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
    
        // Update UI
        projectIndex.style.display = 'none';
        projectContent.style.display = 'block';
    
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
    
        // Update URL - For GitHub Pages, we use only hash-based routing
        if (pushState) {
            window.history.pushState({ projectId: project.id }, project.title, `#${project.slug}`);
        }
    
        // Update active category link
        updateActiveCategoryLink(null);
    }

    /**
     * Selects a category to filter projects
     * @param {string} category - Category to filter by
     * @param {boolean} pushState - Whether to push a new history state
     */
    function selectCategory(category, pushState = true) {
        activeCategory = 'all';
        activeProject = null;
    
        // Update UI
        projectIndex.style.display = 'flex';
        projectContent.style.display = 'none';
    
        // Update breadcrumb
        breadcrumbSeparator.style.display = 'none';
activeBreadcrumb.tabIndex = 0;
        activeBreadcrumb.textContent = '';
    
        // Render all projects
        renderProjectIndex(projects);
        
        // Handle scrolling
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > scrollThreshold) {
            window.scrollTo({
                top: scrollThreshold
            });
        }
    
        // Update URL
        if (pushState) {
            // For GitHub Pages, we use hash-based navigation
            window.history.pushState({ category: category }, 'Projects', window.location.pathname);
        }
    }
    
    /**
     * Updates the active category link in the UI
     * @param {string} category - Current active category
     */
    function updateActiveCategoryLink(category) {
        // This is left empty for now as category filtering is not active
    }

    /**
     * Sets up event listeners for UI interactions
     */
    function setupEventListeners() {
        // Selected Projects link (back to index)
        selectedProjectsLink.addEventListener('click', function (e) {
            e.preventDefault();
            selectCategory('all', true);
        });

        activeBreadcrumb.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: scrollThreshold
            });
        });

        activeBreadcrumb.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // prevent scrolling on Space
                window.scrollTo({
                    top: scrollThreshold
                });
            }
        });

        myName.addEventListener('click', function (e) {
            e.preventDefault();
            selectCategory('all', true);
            window.scrollTo({
                top: 0
            });

        });
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', function(event) {
            handleUrlRouting();
        });
        
        // Listen for hash changes
        window.addEventListener('hashchange', function() {
            handleUrlRouting();
        });
    }

    /**
     * Placeholder for rendering about section
     */
    function renderAboutSection() {
        // Your implementation for about section rendering
    }
});