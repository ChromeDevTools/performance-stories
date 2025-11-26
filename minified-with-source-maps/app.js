import { h, render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { loadImage } from './load.js';
import './fib.js';

const app = h(MyApp, null, '');

render(app, document.querySelector('#app'));

function MyApp(props) {
  const [image, setImage] = useState(null);

  useEffect(async () => {
    const image = await loadImage();
    setImage(image);
  }, []);

  useEffect(() => {
    if (
      ref &&
      ref.current &&
      ref.current instanceof HTMLElement &&
      image !== null
    ) {
      ref.current.appendChild(image);
    }
  }, [image]);

  const ref = useRef();

  return h('div', null, [h('h1', null, 'Hello world'), h('div', { ref }, '')]);
}
