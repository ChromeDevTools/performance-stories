// The problem manifests at a stack depth of 256, but startDemo and stall count as well.
const lowBound = 248;
const highBound = 256;
// Additionally, worth pointing out that the named functions (call250, call252, etc) may not appear at exactly that index in the stack. For extra debugging fun. :)

const output = document.getElementById('output');
let currentMaxDepth = 0;

function stall() {
  const start = Date.now();
  while (Date.now() - start < 0.5) {}
}

function startDemo() {
  const start = performance.now();

  for (let maxDepth = lowBound; maxDepth <= highBound; maxDepth++) {
    currentMaxDepth = maxDepth;
    call0();
  }
  for (let maxDepth = highBound; maxDepth >= lowBound; maxDepth--) {
    currentMaxDepth = maxDepth;
    call0();
  }

  const measure = performance.measure(
    `stack-calling ${lowBound}-${highBound}`,
    { start, end: performance.now() },
  );

  output.textContent += `Total execution time: ${measure.duration.toLocaleString()}ms\n`;
}

// Generate all the call functions
for (let i = highBound; i >= 0; i--) {
  window[`call${i}`] = new Function(`return function call${i}() {
    if (${i} > currentMaxDepth) return;
    if (${i} === currentMaxDepth) stall();
    else call${i + 1}();

    ${i % 4 === 0 ? `//# sourceURL=colorcall${i}.js \n` : ''}
  }`)();
}

startDemo();
document.querySelector('button').addEventListener('click', startDemo);
