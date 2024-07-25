export function insertImage() {
  const img = 'https://placehold.co/800x800';
  const image = new Image();
  image.src = img;
  document.getElementById('app').appendChild(image);
}
