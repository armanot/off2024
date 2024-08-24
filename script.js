function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.style.display === 'block') {
        detailsElement.style.display = 'none';
    } else {
        detailsElement.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Fade out the splash screen after a short delay
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        
        // Once the fade-out transition is complete, hide the splash screen and show the main content
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        });
    }, 4000); // Adjust the delay as needed (3000ms = 3 seconds)
});
