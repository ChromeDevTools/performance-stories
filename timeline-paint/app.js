function addImage(url, width, height) {
  var img = document.createElement('img');
  img.style.position = 'absolute';
  img.style.top = '100px';
  img.style.left = '0px';
  img.style.width = width;
  img.style.height = height;
  img.src = url;
  document.body.appendChild(img);
}

function addCSSImage(url, width, height) {
  var img = document.createElement('div');
  img.style.position = 'absolute';
  img.style.top = '100px';
  img.style.left = '100px';
  img.style.width = width;
  img.style.height = height;
  img.style.background = `url(${url})`;
  document.body.appendChild(img);
}

function run() {
  addImage('https://via.placeholder.com/500/500', '40px', '30px');
  addCSSImage('https://via.placeholder.com/500/500', '30px', '20px');
  // Long URL (1338 characters)
  addCSSImage(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADoElEQVR4nK2WzY4bRRSFv1tV/ed225SigSgiCx6AF+AJ2CTvAXv27Fmxy1vwAKyyZ8kqQooQUQQsBjwzjstjuy+Lqm6XPWPLIFpH1q3qdp+qW+ee206pqSvqOqGpH4//262mdn89V2/WVOxRn4jzYQEFOLBgSJdCD1vYwgYMCG7xDJx6t6bkANVlw0jj0uv2NDvYgsEtPlZKoVBfrdO6cpQXz4y7OaRxiydKpdRCpb4JaTkJmoIii0/Oa4otGEU00ribudIIjTIRGvVtwHIO7uK78QxuOpgoE6FVpkKrvgsY/gXsubvutoEWWqUTpspM6NTPA8L/AndXKRU0MIEpdMpcmKv3K9AMgIq8BlRfHs0/iEfZqnt3Rxv3gE6RKXToDOnQuQ/5asbrDwKDXuL8wxgQMOB+X2qNxA00aItMBrIW7XwY8/mFvIkE7wmXH5D7c0mFjkXaQA3NkLMGbf3KonbY+A/6+TvSzKM4Upm7XmqBFPsi1QqpiKxSQ4U2Pnwrt5HgV8JBqYz1cAp/f8ChFin2TyfKAi2REoph+V/r1VvC+bo+mne3qyhlNUi2NbWIA4s65KfPtpHgF8J5x3o445arJACDDoGMQ5N55fNr+4ZVheaoj4dH5qsuBM0lmPSeDfoXKXi/2AHi77ZyB3yqT2u2NbsMfU3fHA4d61IROaw/xUjSscA1YF9/wsKAUQz8BgSuLmkgjlDEN8Z8SHIWq8llbCTQm6vBzFwkWPFUKTNUmiU/DpXScW/Zv8sqVpIljkqLifr5KI9L+XEJT/Sr8+3CcS+HbuuUQpK44x/OXYFnj6l/XxiRYJDPAUdSnXzzJW3NtGJa09Uyq/sX3wPm7XfMm0B7tj9YxybaXn7I8QzGTVRQSbKPRpkkqS0+gqnSrnynmCMwBI5NDybz2JHDZCdRKKUkkTTpwcUMpjBTuuDnpxqCYxfbc4QeGjp56oa8VfLqFV3HTWogMFfmwftHD8mx2aaX74ZvjQ1sYA1rCLCCD7CEBo0eOzQQpgPFDO1Yzb0KewAGx3ZHvofxs+ke7iFAGCzmyNAnENvtJJFpS+j8cU+m72FITw8WduCGfThYZ/quBrITDUQbQutzHTm0pwcBBZPlysI2+xIp2MtqrJAy4xvtrSI0fiwJhyrapzOPmzBDrmympoNazCgfY9WCVeW1QAtc0oz2jPUQaQR2g92ZIcgpzYOqcgcrCIWnTFbzgIPsNw+OyjEP8qUMCwrW/wPZ2mq+jvKj/AAAAABJRU5ErkJggg==',
    '50px',
    '60px',
  );
}
run();
