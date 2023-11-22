// TimerFire <> TimerInstall
setTimeout(() => {
  console.log('setTimeout ran');
}, 200);

// RAF <> FireAnimationFrame
requestAnimationFrame(() => {
  console.log('requestAnimationFrame fired');
});

// IdleCallback <> FireIdleCallback
requestIdleCallback(() => {
  console.log('requestIdleCallback fired');
});
