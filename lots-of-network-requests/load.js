export function insertImage(size) {
  const img = `https://via.placeholder.com/${size}/${size}`;
  const image = new Image();
  image.src = img;
  document.getElementById('app').appendChild(image);
}
