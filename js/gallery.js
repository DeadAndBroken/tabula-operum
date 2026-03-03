const images = [
  "A1B2C.jpeg", "B8C9D.jpeg", "F1G2H.jpeg", "J3K4L.jpeg",
  "K1L2M.jpeg", "M4N5P.jpeg", "M5N6O.jpeg", "P9Q1R.jpeg",
  "Q2R3S.jpeg", "R7S8T.jpeg", "S2T3U.jpeg", "T7U6V.jpeg",
  "U9V1W.jpeg", "V4W5X.jpeg", "X2Y3Z.jpeg", "Y6Z7A.jpeg",
  "Z3X4Y.jpeg"
];

const gallery = document.getElementById("gallery");

// Tworzenie kart z obrazami
images.forEach(name => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = `images/${name}`;
  img.alt = name;

  // Kliknięcie otwiera lightbox
  img.addEventListener("click", () => {
    openLightbox(img.src);
  });

  card.appendChild(img);
  gallery.appendChild(card);
});

// Tworzenie lightboxa
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lbImg = document.createElement("img");
lightbox.appendChild(lbImg);

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add("show");
}
