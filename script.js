// Handle Menu Toggle
const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('hide');
});

// Handle Window Resize
const handleResize = () => {
    if (window.innerWidth > 1000) {
        menuList.classList.remove('hide');
    } else {
        menuList.classList.add('hide');
    }
};

window.addEventListener('resize', handleResize);
handleResize();  // Call it on load as well

// Handle Image Viewer
const galleryImages = document.querySelectorAll('.gallery-img');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const closeViewer = document.getElementById('closeViewer');

galleryImages.forEach(image => {
    image.addEventListener('click', (event) => {
        const imagePath = event.target.src;
        viewerImage.src = imagePath;
        imageViewer.classList.remove('hide');
    });
});

closeViewer.addEventListener('click', () => {
    imageViewer.classList.add('hide');
});
