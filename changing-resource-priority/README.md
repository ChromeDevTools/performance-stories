# changing-resource-priority

This file shows an example of a page load where a resource's fetch priority changes during the loading.

In this case, the image in the body initially has its priority set to low, but then after Chrome realises it is visible in the viewport, its priority is upgraded to high.

See [the web.dev fetch priority docs](https://web.dev/fetch-priority/#when-would-you-need-fetch-priority) for more detail.
