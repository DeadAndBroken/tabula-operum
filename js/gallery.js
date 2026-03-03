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

  card.style.boxShadow = "0 0 8px rgba(255,255,255,0.2)";

  card.addEventListener("mouseenter", () => {
    const hue = Math.floor(Math.random() * 360);
    const sat = Math.floor(Math.random() * 50 + 50);
    const light = Math.floor(Math.random() * 40 + 50);
    const glow = `hsl(${hue}, ${sat}%, ${light}%)`;

    const scale = (Math.random() * 0.15 + 1).toFixed(2);
    const duration = (Math.random() * 0.8 + 0.5).toFixed(2);

    card.style.transition = `transform ${duration}s ease-in-out, box-shadow ${duration}s ease-in-out`;
    card.style.transform = `scale(${scale})`;
    card.style.boxShadow = `0 0 20px ${glow}, 0 0 40px ${glow}`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 0 8px rgba(255,255,255,0.2)";
  });

  gallery.appendChild(card);
});
