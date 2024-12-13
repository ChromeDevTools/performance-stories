const div = document.querySelector('#app');

const image = document.createElement('img');
image.src = 'https://placehold.co/1000.jpg';

setTimeout(() => {
  div.appendChild(image);
}, 500);
