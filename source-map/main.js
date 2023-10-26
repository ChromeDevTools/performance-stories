function myTopFunction() {
  helperFunction();
  console.log('done');
}

function helperFunction() {
  myBottomFunction(300);
  const div = document.createElement('div');
  div.innerText = 'Hi';
  document.body.append(div);
  console.log('hi');
}

function myBottomFunction(breakDuration) {
  console.trace();
  const started = performance.now();
  while (performance.now() - started < breakDuration);
}

myTopFunction();
