// Theme management based on time of day
document.addEventListener('DOMContentLoaded', function() {
    // Function to determine if it's daytime or nighttime
    function isDaytime() {
        const now = new Date();
        const hour = now.getHours();
        
        // Consider 6 AM to 8 PM as daytime
        return hour >= 6 && hour < 20;
    }
    
    // Function to set the theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Store the theme preference in localStorage
        localStorage.setItem('theme', theme);
        
        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.content = theme === 'light' ? '#fafafa' : '#1c1c1c';
        } else {
            const meta = document.createElement('meta');
            meta.name = 'theme-color';
            meta.content = theme === 'light' ? '#fafafa' : '#1c1c1c';
            document.head.appendChild(meta);
        }
    }
    
    // Function to initialize theme
    function initializeTheme() {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // Use saved preference
            setTheme(savedTheme);
        } else {
            // Auto-detect based on time of day
            const theme = isDaytime() ? 'light' : 'dark';
            setTheme(theme);
        }
    }
    
    // Function to check and update theme periodically
    function checkThemeUpdate() {
        const savedTheme = localStorage.getItem('theme');
        
        // Only auto-update if no manual preference is saved
        if (!savedTheme) {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const shouldBeLight = isDaytime();
            const newTheme = shouldBeLight ? 'light' : 'dark';
            
            if (currentTheme !== newTheme) {
                setTheme(newTheme);
            }
        }
    }
    
    // Initialize theme on page load
    initializeTheme();
    
    // Check for theme updates every 30 minutes
    setInterval(checkThemeUpdate, 30 * 60 * 1000);
    
    // Optional: Add manual theme toggle functionality
    // Uncomment the following code if you want to add a manual toggle button
    
    /*
    function createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        `;
        
        toggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            toggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
        });
        
        // Set initial icon
        const currentTheme = document.documentElement.getAttribute('data-theme');
        toggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
        
        document.body.appendChild(toggle);
    }
    
    // Uncomment to add the toggle button
    // createThemeToggle();
    */
});


