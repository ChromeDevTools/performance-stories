function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

async function run() {
  console.time('run one')
  fibonacci(40)
  console.timeEnd('run one')
  console.timeStamp('timestamp one')
  console.time('run two')
  fibonacci(40)
  console.timeLog('run two')
  fibonacci(40)
  console.timeEnd('run two')
}

run()
