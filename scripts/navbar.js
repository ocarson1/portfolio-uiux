document.addEventListener('DOMContentLoaded', function() {
    const stickyNav = document.getElementById('stickyNav');
    const myName = document.getElementById('myName');
    const subNavs = document.querySelectorAll('.sub-nav');
    
    // Debounce function to prevent rapid state changes
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function to limit scroll event firing
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Handle scroll event with Safari optimizations
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Handle main nav with more stable threshold
        const shouldBeActive = scrollY > 25; // Slightly higher threshold for stability
        const isCurrentlyActive = stickyNav.classList.contains('active');
        
        // Only update if state actually needs to change
        if (shouldBeActive && !isCurrentlyActive) {
            stickyNav.classList.add('active');
        } else if (!shouldBeActive && isCurrentlyActive) {
            stickyNav.classList.remove('active');
        }

        // Handle sub-nav sticky states with more stable calculations
        subNavs.forEach(subNav => {
            const rect = subNav.getBoundingClientRect();
            const threshold = subNav.classList.contains('about-nav') ? 95 : 45; // Slightly higher thresholds
            const shouldBeSticky = rect.top <= threshold;
            const isCurrentlySticky = subNav.classList.contains('sticky');
            
            // Only update if state actually needs to change
            if (shouldBeSticky && !isCurrentlySticky) {
                subNav.classList.add('sticky');
            } else if (!shouldBeSticky && isCurrentlySticky) {
                subNav.classList.remove('sticky');
            }
        });
    }
    
    // Debounced scroll handler for more stable state changes
    const debouncedHandleScroll = debounce(handleScroll, 10);
    
    // Throttled scroll handler (32ms = ~30fps for better performance)
    const throttledHandleScroll = throttle(debouncedHandleScroll, 32);
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Call once on page load to set initial state
    handleScroll();
});
