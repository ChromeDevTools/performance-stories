// Dynamically injected script
const dynamicScript = document.createElement('script');
dynamicScript.src = 'scripts/dynamic.js';
document.body.appendChild(dynamicScript);

// Script loaded via XHR/Fetch and injected
fetch('scripts/fetched.js')
  .then((response) => response.text())
  .then((scriptText) => {
    const fetchedScript = document.createElement('script');
    fetchedScript.textContent = scriptText;
    document.body.appendChild(fetchedScript);
  });

// Dynamic import within a module
import('./scripts/another-module.js').then((module) => {
  console.log('dynamically imported module loaded', module);
});

// Script loaded via document.write
document.write('<script src="scripts/document-write.js"></script>');

// Dynamically injected stylesheet
const dynamicStylesheet = document.createElement('link');
dynamicStylesheet.rel = 'stylesheet';
dynamicStylesheet.href = 'stylesheets/dynamic.css';
document.head.appendChild(dynamicStylesheet);

// Image created in JS
const jsImage = new Image();
jsImage.src = 'images/js-created.png';
document.body.appendChild(jsImage);
