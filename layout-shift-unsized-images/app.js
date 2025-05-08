setTimeout(function () {
  const img = document.createElement('img');
  img.src = './lcp-image.png';
  document.body.prepend(img);
}, 2000);
setTimeout(function () {
  const img = document.createElement('img');
  img.src = 'https://placehold.co/600x400';
  document.body.prepend(img);
}, 1000);
