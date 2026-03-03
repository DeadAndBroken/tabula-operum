const gallery = document.getElementById('gallery');

const images = [
  "images/A1B2C.jpeg","images/B8C9D.jpeg","images/F1G2H.jpeg",
  "images/J3K4L.jpeg","images/K1L2M.jpeg","images/M4N5P.jpeg",
  "images/M5N6O.jpeg","images/P9Q1R.jpeg","images/Q2R3S.jpeg",
  "images/R7S8T.jpeg","images/S2T3U.jpeg","images/T7U6V.jpeg",
  "images/U9V1W.jpeg","images/V4W5X.jpeg","images/X2Y3Z.jpeg",
  "images/Y6Z7A.jpeg","images/Z3X4Y.jpeg"
];

function getRandomSteelRainbow() {
  const colors = ['#4682B4','#5F9EA0','#B0C4DE','#87CEFA','#1E90FF','#00BFFF','#6495ED','#7B68EE','#6A5ACD','#4169E1'];
  return colors[Math.floor(Math.random()*colors.length)];
}

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;

  let pulseInterval;

  img.addEventListener('mouseenter', () => {
    const baseColor = getRandomSteelRainbow();
    let light = 0.2;
    let rising = true;

    pulseInterval = setInterval(() => {
      if(rising) light += 0.01;
      else light -= 0.01;
      if(light >= 0.6) rising = false;
      if(light <= 0.2) rising = true;

      // tworzymy rgba dla box-shadow
      const shadowColor = hexToRgba(baseColor, light);
      img.style.boxShadow = `0 0 20px ${shadowColor}`;
      img.style.transform = 'scale(1.05)';
    }, 20);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(pulseInterval);
    img.style.boxShadow = '0 0 8px rgba(255,255,255,0.2)';
    img.style.transform = 'scale(1)';
  });

  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.cursor = 'pointer';
    overlay.style.zIndex = 1000;

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

// helper: hex na rgba
function hexToRgba(hex, alpha){
  const bigint = parseInt(hex.slice(1),16);
  const r = (bigint >>16)&255;
  const g = (bigint >>8)&255;
  const b = bigint &255;
  return `rgba(${r},${g},${b},${alpha})`;
}
