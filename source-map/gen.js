function n() {
  o();
  t(true);
  console.log('done');
}
function o() {
  e(300);
  const n = document.createElement('div');
  n.innerText = 'Hi';
  document.body.append(n);
  console.log('hi');
}
function e(n) {
  console.trace();
  const o = performance.now();
  while (performance.now() - o < n);
}
function t(n) {
  if (!n) return;
  c();
}
function c() {
  function n() {
    return Math.random();
  }
  e(1e3);
  if (n() * 5 > 0) throw Error();
}
n();
t(false);
//# sourceMappingURL=gen.js.map
