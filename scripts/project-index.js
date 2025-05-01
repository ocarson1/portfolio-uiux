document.addEventListener('DOMContentLoaded', function () {
    // Project data
    const projects = [
        {
            id: 1,
            title: "Warp Terminal",
            date: "Current",
            description: "Using AI to customize a tool for software developers",
            category: "Web",
            content: "../content/rihousing.md",
            preview: "../images/aapi-history/truck.png",
            status: "active"
        },
        // {
        //     id: 2,
        //     title: "Web Collage",
        //     date: "Current",
        //     description: "Built a site for creatively interpreting trending search data",
        //     category: "Web, Exhibition",
        //     content: "../content/web-collage.md",
        //     status: "active"
        // },
        {
            id: 3,
            title: "Handwoven Youth",
            date: "February 2025",
            description: "Developed a Webflow site for an emerging education nonprofit",
            category: "Web, Education",
            content: "../content/handwoven-youth.md",
            preview: "../images/aapi-history/zines.jpeg",
            status: "active"
        },
        {
            id: 5,
            title: "AAPI History Museum",
            date: "Summer 2024",
            description: "Co-designed and fabricated a dynamic travelling history exhibit.",
            category: "Education, Exhibition",
            content: "../content/aapi-history.md",
            preview: "../images/finder.png",
            status: "active"
        },
        {
            id: 5,
            title: "brown.edu",
            date: "Summer 2024",
            description: "Helped publish 25 sites for the university's redesign.",
            category: "Education, Exhibition",
            content: "../content/aapi-history.md",
            preview: "../images/rihousing/rihousing-preview.png",
            status: "active"
        },
    ];

    const categories = ['Web', 'Education', 'Exhibition'];

    // DOM elements
    const projectIndex = document.getElementById('project-index');
    const projectContent = document.getElementById('project-content');
    const categoryLinks = document.querySelectorAll('#head-links .clickable');
    const selectedProjectsLink = document.getElementById('selected-projects');
    const activeBreadcrumb = document.getElementById('active-breadcrumb');
    const breadcrumbSeparator = document.getElementById('breadcrumb-separator');

    // State
    let activeCategory = 'all';
    let activeProject = null;

    // Initialize the page
    renderProjectIndex(projects);
    setupEventListeners();
    renderAboutSection();

    // Functions
    function renderProjectIndex(projectsToRender) {
        projectIndex.innerHTML = '';
        
        projectsToRender.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
            projectElement.dataset.id = project.id;
            
            // Create tags HTML
            const tagsHTML = createTagsHTML(project.category);
            
            projectElement.innerHTML = `
                <div class="item-1">
                                    <img class="rounded" src='${project.preview}'></img>

                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                    <div class="item-title">${project.title}</div>
                                    <div class="item-description">${project.description}</div>

                </div>
            `;
            
            projectElement.addEventListener('click', () => {
                selectProject(project);
            });
            
            projectIndex.appendChild(projectElement);
        });
    }
    
    // Helper function to create tag boxes
    function createTagsHTML(categoriesString) {
        if (!categoriesString) return '';
        
        // Split the categories string into an array
        const categories = categoriesString.split(', ');
        
        // Define tag colors
        const tagColors = {
            'Web': 'rgba(38, 187, 204, 0.75)',
            'Education': 'rgba(255, 62, 146, 0.75)',
            'Exhibition': 'rgba(255, 217, 64, 0.75)'
        };
        
        return categories.map(category => {
            const color = tagColors[category] || '#888888';
            return `<div class="tag" style="background-color: ${color}">${category}</div>`;
        }).join('');
    }
    function selectProject(project) {
        activeProject = project;

        // Update UI
        projectIndex.style.display = 'none';
        projectContent.style.display = 'block';

        // Update breadcrumb
        activeBreadcrumb.textContent = project.title;
        breadcrumbSeparator.style.display = 'inline';

        // Load and render project content
        loadProjectContent(project.content);

        // // Scroll to top of content
        // smoothScrollTo(document.querySelector('.sub-nav'), 360);

        // Update active category link
        updateActiveCategoryLink(null);
    }

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
                    <div class="spacer-90"></div>
                `;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                projectContent.innerHTML = `
                    <div class="spacer-50"></div>
                    <div class="error">Failed to load content. Please try again later.</div>
                    <div class="spacer-90"></div>
                `;
            });
    }

    function filterProjectsByCategory(category) {
        if (category === 'all') {
            return projects;
        } else {
            return projects.filter(project => project.category.includes(category));
        }
    }

    function selectCategory(category) {
        activeCategory = category;
        activeProject = null;

        // Update UI
        projectIndex.style.display = 'grid';
        projectContent.style.display = 'none';

        // Update breadcrumb
        if (category === 'all') {
            breadcrumbSeparator.style.display = 'none';
            activeBreadcrumb.textContent = '';
        } else {
            breadcrumbSeparator.style.display = 'inline';
            activeBreadcrumb.textContent = category;
        }

        // Filter and render projects
        const filteredProjects = filterProjectsByCategory(category);
        renderProjectIndex(filteredProjects);

        // Update active category link
        updateActiveCategoryLink(category);
    }

    function updateActiveCategoryLink(category) {
        categoryLinks.forEach(link => {
            link.classList.remove('active');
            if (category === 'all' && link.dataset.category === 'all') {
                link.classList.add('active');
            } else if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });
    }

    function setupEventListeners() {
        // Category filter links
        categoryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const category = this.dataset.category;
                selectCategory(category);
            });
        });

        // Selected Projects link (back to index)
        selectedProjectsLink.addEventListener('click', function (e) {
            e.preventDefault();
            selectCategory('all');
        });
    }

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
});