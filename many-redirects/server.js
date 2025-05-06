/**
 * @fileoverview A NodeJS server that purposefully serves very slowly.
 * 1. Any request to the root path will redirect to /redirect1.
 * 2. /redirect1 will redirect to /redirect2.
 * 3. /redirect2 will redirect to /redirect3.
 * 4. /redirect3 will serve a slow page after a 5 second delay.
 * 5. The content is served uncompressed.
 */

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    setTimeout(() => {
      res.writeHead(302, { Location: '/redirect1' });
      res.end();
    }, 500);
  } else if (req.url === '/redirect1') {
    setTimeout(() => {
      res.writeHead(302, { Location: '/redirect2' });
      res.end();
    }, 500);
  } else if (req.url === '/redirect2') {
    setTimeout(() => {
      res.writeHead(302, { Location: '/redirect3' });
      res.end();
    }, 500);
  } else if (req.url === '/redirect3') {
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Slow Page</title>
        </head>
        <body>
          <h1>This page loads very slowly!</h1>
          <ul>
           <li><strong>Redirects</strong>: this page has 3 redirects before finally serving the initial content.</li>
           <li><strong>Compresssion</strong>: the page is served without compression and a large amount of HTML text.</li>
           <li><strong>Slow server</strong>: the final response is artificially delayed by 2 seconds.</li>
          </ul>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ullamcorper eros. Nam vestibulum condimentum euismod. Ut at lacus sed sapien luctus ultrices ut nec massa. Mauris vestibulum leo vulputate convallis convallis. In consectetur diam quis dui euismod, nec feugiat eros euismod. Maecenas quis maximus velit. Vivamus iaculis euismod sapien ut consectetur. Nulla eros quam, semper eget tellus sed, euismod varius mi.

Curabitur tincidunt vel nulla eget bibendum. Cras tempus posuere elit nec consequat. Cras congue cursus velit at aliquet. Sed id ante tellus. Vivamus imperdiet placerat odio nec tristique. Phasellus sagittis ante sit amet massa pharetra, eu tincidunt libero luctus. Nullam molestie mi at ante rhoncus, iaculis fringilla ligula ultricies. Donec lacus neque, facilisis sit amet erat sit amet, interdum eleifend nulla. Proin euismod ultrices orci tincidunt blandit. Duis commodo auctor erat, a blandit nunc pellentesque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nisi a tortor luctus tincidunt ac non turpis. Vestibulum imperdiet gravida vehicula. Sed elementum risus at dictum volutpat. Etiam eu lorem quis odio condimentum laoreet sit amet eget sapien.

Aenean quis rhoncus nibh, non iaculis dui. Nulla sed odio eros. In hendrerit consequat tincidunt. Nullam ullamcorper aliquet volutpat. Pellentesque mauris purus, faucibus eu erat id, sodales pharetra arcu. Nam tempus porttitor elementum. Pellentesque sodales neque feugiat ipsum faucibus consequat. Aliquam sapien eros, tempor eu ex ac, facilisis elementum sem.

Nam eget nunc sodales, tempor erat a, commodo ex. Morbi libero elit, blandit in varius at, ultricies ut arcu. Mauris posuere cursus tortor ac venenatis. Duis bibendum dolor eu libero consectetur, at fringilla erat elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sodales fermentum venenatis. Pellentesque vulputate erat nisl, vitae euismod nunc viverra in. Sed eu pharetra dui, et ultricies ipsum. Suspendisse volutpat ex enim, quis suscipit ligula imperdiet a. Nunc faucibus mauris sit amet tortor vestibulum, malesuada malesuada ligula commodo. Phasellus in massa posuere, rutrum ligula at, ultricies felis. Pellentesque tempus metus nec lacinia sollicitudin. Phasellus sed ornare ex. Quisque orci dui, cursus vitae nisi nec, fermentum rhoncus lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse in leo a magna ornare pellentesque. Morbi sagittis odio sed efficitur feugiat. Nullam non aliquam neque. Curabitur faucibus semper nunc, id aliquet augue tincidunt at. Aenean at augue et diam accumsan elementum ut commodo orci. Vestibulum aliquet orci eget felis suscipit ornare. Aliquam vitae semper massa. Sed sit amet malesuada justo. Nulla sed aliquet ante. Donec tincidunt nunc quam, quis laoreet velit sodales vehicula. Nam vel mi quis ligula varius iaculis sed at nisl. Nam vulputate luctus sapien, eget mollis lectus. Vestibulum nulla risus, pretium in facilisis sed, dapibus eget lorem. Proin dictum felis ut nisi malesuada porta.


        </body>
        </html>
      `);
    }, 2000);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
