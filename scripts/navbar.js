document.addEventListener('DOMContentLoaded', function() {
    const stickyNav = document.getElementById('stickyNav');
    const myName = document.getElementById('myName');
    const subNavs = document.querySelectorAll('.sub-nav');
    
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
    
    // Handle scroll event
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Handle main nav
        if (scrollY > 20) {
            stickyNav.classList.add('active');
           // myName.classList.add('active');
        } else {
            stickyNav.classList.remove('active');
           // myName.classList.remove('active');
        }

        // Handle sub-nav sticky states with debouncing
        subNavs.forEach(subNav => {
            const rect = subNav.getBoundingClientRect();
            const threshold = subNav.classList.contains('about-nav') ? 90 : 42;
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
    
    // Throttled scroll handler (16ms = ~60fps)
    const throttledHandleScroll = throttle(handleScroll, 16);
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Call once on page load to set initial state
    handleScroll();
});
