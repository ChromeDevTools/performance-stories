export function insertImage() {
  const img = 'https://placedog.net/500/500';
  const image = new Image();
  image.src = img;
  document.getElementById('app').appendChild(image);
}
