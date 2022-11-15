function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const btn = document.querySelector("button");
const params = new URLSearchParams(location.search);

btn.addEventListener("click", () => {
  console.log(fibonacci(Number(params.get("x"))));
  btn.style.backgroundColor = "red";
});
