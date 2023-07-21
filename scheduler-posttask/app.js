function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function taskOne() {
  const x = fibonacci(30);
  console.log('Task one [background]', x);
}

function taskTwo() {
  const x = fibonacci(25);
  console.log('Task two [user visible]', x);
}

function taskThree() {
  const x = fibonacci(20);
  console.log('Task three [user blocking]', x);
}

function taskFour() {
  const x = fibonacci(15);
  console.log('Task four [default]', x);
}

scheduler.postTask(taskOne, { priority: 'background' });
scheduler.postTask(taskTwo, { priority: 'user-visible' });
scheduler.postTask(taskThree, { priority: 'user-blocking' });
scheduler.postTask(taskFour);
