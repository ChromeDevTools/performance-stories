performance.mark('mark1');
setTimeout(() => {
  performance.measure('first measure', {
    start: 'mark1',
    detail: {
      devtools: {
        dataType: 'track-entry',
        track: 'Demoing DevTools e11y',
        color: 'tertiary-dark',
        tooltipText: 'first measure',
      },
    },
  });
}, 200);
setTimeout(() => {
  performance.measure('second measure', {
    start: 'mark1',
    detail: {
      devtools: {
        dataType: 'track-entry',
        track: 'Demoing DevTools e11y',
        color: 'tertiary-dark',
        tooltipText: 'second measure',
      },
    },
  });
}, 600);

setTimeout(() => {
  performance.mark('mark3');
  setTimeout(() => {
    performance.measure('third measure', {
      start: 'mark3',
      detail: {
        devtools: {
          dataType: 'track-entry',
          track: 'Demoing DevTools e11y',
          color: 'tertiary-dark',
          tooltipText: 'second measure',
        },
      },
    });
  }, 2000);
}, 1000);
