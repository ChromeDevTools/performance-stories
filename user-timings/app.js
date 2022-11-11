const mark1 = performance.mark('mark1');
setTimeout(() => {
  performance.measure('first measure', 'mark1');
}, 200);

setTimeout(() => {
  performance.measure('second measure', 'mark1');
}, 600)

setTimeout(() => {
  const mark3 = performance.mark('mark3');
  setTimeout(()=> {
    performance.measure('third measure', 'mark3');
  }, 2000);
}, 1000)

