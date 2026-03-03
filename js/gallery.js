const images = [
  'images/A1B2C.jpeg',
  'images/B8C9D.jpeg',
  'images/F1G2H.jpeg',
  'images/J3K4L.jpeg',
  'images/K1L2M.jpeg',
  'images/M4N5P.jpeg',
  'images/M5N6O.jpeg',
  'images/P9Q1R.jpeg',
  'images/Q2R3S.jpeg',
  'images/R7S8T.jpeg',
  'images/S2T3U.jpeg',
  'images/T7U6V.jpeg',
  'images/U9V1W.jpeg',
  'images/V4W5X.jpeg',
  'images/X2Y3Z.jpeg',
  'images/Y6Z7A.jpeg',
  'images/Z3X4Y.jpeg'
];

const gallery = document.getElementById('gallery');

images.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = src;
  card.appendChild(img);

  // powiększenie po kliknięciu
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.cursor = 'pointer';
    modal.style.zIndex = 9999;

    const modalImg = document.createElement('img');
    modalImg.src = src;
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';
    modalImg.style.borderRadius = '10px';
    modal.appendChild(modalImg);

    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  });

  gallery.appendChild(card);
});
