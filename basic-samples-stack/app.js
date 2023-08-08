function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

async function delay(x) {
  return new Promise((resolve) => {
    setTimeout(resolve, x);
  });
}

async function basicTwo() {
  basicThree();
}

function basicThree() {
  console.log(fibonacci(20));
}
async function basicStackOne() {
  await delay(50);
  basicTwo();
}

basicStackOne();
