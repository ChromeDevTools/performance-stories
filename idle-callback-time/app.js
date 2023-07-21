function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function run() {
  requestIdleCallback(() => {
    fibonacci(35);
    document.body.style.background = 'lightblue';
  });
}

run();
