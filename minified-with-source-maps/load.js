export function insertImage() {
  const img = 'https://placehold.co/500x500';
  const image = new Image();
  image.src = img;
  document.getElementById('app').appendChild(image);
}

export async function insertText() {
  await new Promise((r) => setTimeout(r, 500));
  const p = document.createElement('p');
  p.innerText = 'Hello, world!';
  document.getElementById('app').appendChild(p);
}
