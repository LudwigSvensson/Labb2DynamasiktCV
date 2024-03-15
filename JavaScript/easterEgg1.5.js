document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    let originalBackgroundImage = document.body.style.backgroundImage;
    let isBackgroundChanged = false;
    
    footer.addEventListener('click', function() {
        if (!isBackgroundChanged) {
            document.body.style.backgroundImage = 'url(/Images/beach.jpg)';
            isBackgroundChanged = true;
        } else {
            document.body.style.backgroundImage = originalBackgroundImage;
            isBackgroundChanged = false;
        }
    });
});

