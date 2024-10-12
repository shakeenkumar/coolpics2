// Menu toggle
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

// Handle window resize
function handleResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
}

window.addEventListener('resize', handleResize);
handleResize();

// Image viewer modal
const viewer = document.querySelector('.viewer');
const closeButton = document.querySelector('.close-viewer');
const viewerImage = viewer.querySelector('img');

// Function to handle image click
function viewHandler(event) {
  const target = event.target;
  
  if (target.tagName === 'IMG') {
    const imgSrc = target.src.split('-')[0] + '-full.jpeg';
    viewerImage.src = imgSrc;
    viewer.classList.remove('hide');
  }
}

// Close the viewer when X is clicked
function closeViewer() {
  viewer.classList.add('hide');
}

// Add event listeners
document.querySelector('.gallery').addEventListener('click', viewHandler);
closeButton.addEventListener('click', closeViewer);
