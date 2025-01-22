import('./load.js').then((module) => {
  sleepSync(1_500); // artificial delay
  module.insertImage();
});

function sleepSync(ms) {
  const start = Date.now();
  while (Date.now() - start < ms);
}
