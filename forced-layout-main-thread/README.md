# forced-layout-main-thread

Renders a bunch of divs, and then takes the middle div and progressively changes its width a bunch of times, whilst logging `getBoundingClientRect` every time, thus causing a huge amount of forced layouts.
