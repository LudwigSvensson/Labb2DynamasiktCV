document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.getElementById('LudwigProfilePic');
    
    const alternateImages = [
      '/Images/dog cauliflower.jpg',
      '/Images/cw (2).png'
    ];
    let currentIndex = 0; 

    imgElement.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= alternateImages.length) {
            currentIndex = 0;
        }
        imgElement.src = alternateImages[currentIndex];
    });
});