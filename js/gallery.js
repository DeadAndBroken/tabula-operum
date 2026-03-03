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

const gallery = document.getElementById("gallery");

images.forEach(src => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = src;
  card.appendChild(img);

  // losowy kolor poświaty
  const glowColor = `hsl(${Math.floor(Math.random()*360)}, 80%, 60%)`;
  card.style.boxShadow = `0 0 15px ${glowColor}`;

  // losowa animacja pulsowania
  const duration = (Math.random()*3 + 2).toFixed(2); // 2-5s
  card.style.animation = `pulse ${duration}s infinite alternate`;

  gallery.appendChild(card);
});
