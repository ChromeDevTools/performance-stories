function helloWorld() {
  console.log('hello, world!');
}

setTimeout(helloWorld, 500);

setTimeout(() => {
  console.log('anonymous, hello world!');
}, 1000);

setInterval(helloWorld, 1500);
