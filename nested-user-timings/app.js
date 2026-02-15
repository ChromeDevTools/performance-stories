function consecutiveNonOverlapping() {
  const name = 'ConsecutiveNonOverlapping';
  const start = performance.now();

  performance.measure(name, {
    start: start,
    end: start + 500,
  });
  performance.measure(name, {
    start: start + 500,
    end: start + 1000,
  });
}

function overlappingNonNested() {
  const name = 'OverlappingNonNested';
  const start = performance.now();

  performance.measure(name, {
    start: start,
    end: start + 500,
  });
  performance.measure(name, {
    start: start + 100,
    end: start + 600,
  });
}

function overlappingNested() {
  const name = 'OverlappingNested';
  const start = performance.now();

  performance.measure(name, {
    start: start,
    end: start + 500,
  });
  performance.measure(name, {
    start: start + 100,
    end: start + 200,
  });
}

setTimeout(() => {
  consecutiveNonOverlapping();
}, 100);

setTimeout(() => {
  overlappingNonNested();
}, 2000);

setTimeout(() => {
  overlappingNested();

  const text = document.createTextNode('Finished!');
  document.body.appendChild(text);
}, 3000);
