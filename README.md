# performance-stories

Example use cases for performance tooling

## Adding a story

Create a new top level folder named based on what it's demonstrating. If you
need to add more context, create a `README.md` file within that folder.

Each story should have an `index.html` file, and can contain any other static
assets that are required.

## Running a story locally

First, clone the repository and run `npm install`.

You now have two choices:

1. Run `npm serve`, which will run a server in this repository's root, and
   visit `http://localhost:8787/{story-name}/index.html`. For example,
   `http://localhost:8787/text-based-lcp/index.html`.

2. Run `npm serve {story-name}`, which will run a server for that story and
   visit `http://localhost:8787` to view that story.

Note: by default the server is only available on `localhost` and not exposed to
the network. You can run `npm run serve-network` to have it exposed to the
network.

## Viewing stories online

This site is automatically deployed via GitHub Pages and available at https://chromedevtools.github.io/performance-stories.
