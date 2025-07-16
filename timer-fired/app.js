function helloWorld() {
  sleepSync(100);
  console.log('hello, world!');
}

setTimeout(helloWorld, 500);

setTimeout(() => {
  sleepSync(100);
  console.log('anonymous, hello world!');
}, 1000);

setInterval(helloWorld, 1500);

function sleepSync(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // Busy-wait, blocks the main thread
  }
}
