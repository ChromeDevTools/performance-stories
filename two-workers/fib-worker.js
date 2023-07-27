function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

self.onmessage = function (event) {
  const result = fibonacci(event.data.value);
  self.postMessage(result);
};
