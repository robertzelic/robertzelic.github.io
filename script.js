const images = document.querySelectorAll('.project__image img');
const lightbox = document.querySelector('#lightbox');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    if (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    const img = document.createElement('img');
    img.src = image.src;
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
