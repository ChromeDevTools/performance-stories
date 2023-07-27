const worker1 = new Worker('./fib-worker.js')
const worker2 = new Worker('./fib-worker.js')

worker1.postMessage({value: 30})
worker2.postMessage({value: 35})

worker1.onmessage = function(event) {
  const result = event.data;
  const text = document.createElement('p');
  text.innerHTML = `Worker 1 : Fib(30) = ${result}`
  document.body.appendChild(text)
}

worker2.onmessage = function(event) {
  const result = event.data;
  const text = document.createElement('p');
  text.innerHTML = `Worker 2 : Fib(35) = ${result}`
  document.body.appendChild(text)
}
