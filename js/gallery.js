const gallery = document.getElementById('gallery');

const images = [
  "images/A1B2C.jpeg",
  "images/B8C9D.jpeg",
  "images/F1G2H.jpeg",
  "images/J3K4L.jpeg",
  "images/K1L2M.jpeg",
  "images/M4N5P.jpeg",
  "images/M5N6O.jpeg",
  "images/P9Q1R.jpeg",
  "images/Q2R3S.jpeg",
  "images/R7S8T.jpeg",
  "images/S2T3U.jpeg",
  "images/T7U6V.jpeg",
  "images/U9V1W.jpeg",
  "images/V4W5X.jpeg",
  "images/X2Y3Z.jpeg",
  "images/Y6Z7A.jpeg",
  "images/Z3X4Y.jpeg"
];

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;

  img.addEventListener('mouseenter', () => {
    // losowe podświetlenie
    const randX = (Math.random() * 10) - 5;
    const randY = (Math.random() * 10) - 5;
    const randBlur = 10 + Math.random() * 10;
    const randColor = `rgba(255,255,255,${0.2 + Math.random() * 0.5})`;

    img.style.transform = `scale(1.1) translate(${randX}px, ${randY}px)`;
    img.style.boxShadow = `0 0 ${randBlur}px ${randColor}`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = '0 0 8px rgba(255,255,255,0.2)';
  });

  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.cursor = 'pointer';
    overlay.style.zIndex = '1000';

    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    fullImg.style.borderRadius = '12px';
    overlay.appendChild(fullImg);

    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });

  gallery.appendChild(img);
});
