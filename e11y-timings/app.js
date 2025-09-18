setTimeout(() => {
  const now = performance.now();
  performance.measure('Update', {
    start: now - 1000,
    end: now - 500,
    detail: {
      devtools: {
        track: 'My Track',
        trackGroup: 'My Track Group',
      },
    },
  });
  performance.measure('Update', {
    start: now - 500,
    end: now,
    detail: {
      devtools: {
        track: 'My Track',
        trackGroup: 'My Track Group',
      },
    },
  });

  performance.measure('Some other event', {
    start: now - 700,
    end: now + 500,
    detail: {
      devtools: {
        track: 'My Track',
        trackGroup: 'My Track Group',
      },
    },
  });
}, 2000);

performance.mark('Mark event 1', {
  startTime: 1500,
  detail: {
    devtools: {
      track: 'My Track',
      trackGroup: 'My Track Group',
    },
  },
});

performance.mark('Mark event 2', {
  startTime: 2500,
  detail: {
    devtools: {
      track: 'My Track',
      trackGroup: 'My Track Group',
    },
  },
});
