const gridItems = document.querySelectorAll('.grid-item');

const newContent = [
  {
    image: 'https://via.placeholder.com/400x600/ff0000/ffffff', 
    image2: 'https://via.placeholder.com/400x600', 
    text: 'Nuevo texto 1' ,
    text2: 'Nuevo texto 3' ,
  },
  {
    image: 'https://via.placeholder.com/400x600/ff0000/ffffff', 
    image2: 'https://via.placeholder.com/400x600', 
    text: 'Nuevo texto 1' ,
    text2: 'Nuevo texto 3' ,
  },
  {
    image: 'https://via.placeholder.com/400x600/ff0000/ffffff', 
    image2: 'https://via.placeholder.com/400x600', 
    text: 'Nuevo texto 1' ,
    text2: 'Nuevo texto 3' ,
  }
];

gridItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    const image = item.querySelector('.image');
    const text = item.querySelector('.text');
    
    // Cambiar la imagen y el texto
    image.src = newContent[index].image;
    text.textContent = newContent[index].text;

    // Agregar la clase clicked para controlar la visibilidad
    item.classList.add('clicked');
  });
});
