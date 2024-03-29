function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const input = document.querySelector('#text');

input.addEventListener('keydown', (e) => {
  e.preventDefault();
  fibonacci(30);
  input.value += e.key;
});
