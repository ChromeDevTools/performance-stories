export function loadImage() {
  const img = 'https://placehold.co/500x500';
  const image = new Image();
  image.src = img;
  return new Promise((resolve) => {
    image.onload = function () {
      resolve(image);
    };
  });
}
