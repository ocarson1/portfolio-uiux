document.addEventListener('DOMContentLoaded', function() {
    const stickyNav = document.getElementById('stickyNav');
    const myName = document.getElementById('myName');
    const subNavs = document.querySelectorAll('.sub-nav');
    
    // Handle scroll event
    function handleScroll() {
        if (window.scrollY > 20) {
            stickyNav.classList.add('active');
            myName.classList.add('active');
        } else {
            stickyNav.classList.remove('active');
            myName.classList.remove('active');
        }

        // Handle sub-nav sticky states
        subNavs.forEach(subNav => {
            const rect = subNav.getBoundingClientRect();
            if (rect.top <= 42) {
                subNav.classList.add('sticky');
            } else {
                subNav.classList.remove('sticky');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on page load to set initial state
    handleScroll();
});
