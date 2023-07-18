import('./load.js').then(module => {
  let size = 100
  while(size < 150) {
    module.insertImage(size++);
  }
  import('./some-script.js')
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('href', 'style.css')
  document.head.appendChild(link)
});
