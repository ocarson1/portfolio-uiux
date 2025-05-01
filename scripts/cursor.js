const glow = document.getElementById('glow');
        const cursor = document.getElementById('cursor');
        
        // Update cursor and glow position
        document.addEventListener('mousemove', (e) => {
            // Position the glow element
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            
            // Position the custom cursor
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Ensure they're visible
            glow.style.opacity = '1';
            cursor.style.opacity = '1';
        });
        
        // Hide the glow when cursor leaves the window
        document.addEventListener('mouseout', () => {
            glow.style.opacity = '0';
            cursor.style.opacity = '0';
        });
        
        // Show the glow when cursor enters the window
        document.addEventListener('mouseover', () => {
            glow.style.opacity = '1';
            cursor.style.opacity = '1';
        });