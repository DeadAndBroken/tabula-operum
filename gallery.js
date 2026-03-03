const images = [
  'images/demo1.jpg',
  'images/demo2.jpg',
  'images/demo3.jpg'
  // Dodaj więcej plików w razie potrzeby
];

const gallery = document.getElementById('gallery');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Demonstracja';
  gallery.appendChild(img);
});

const imgs = document.querySelectorAll('.gallery img');

window.addEventListener('scroll', () => {
  imgs.forEach(img => {
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      img.classList.add('show');
    }
  });
});
