function navigateToURL(url) {
  history.pushState(null, null, url);
  const imageSize = url === "pageOne" ? 500 : 100;
  document.querySelector(
    "#app"
  ).innerHTML = `<img src="https://via.placeholder.com/${imageSize}.jpg" />`;
}

const pageOne = document.querySelector("#page1");
const pageTwo = document.querySelector("#page2");

pageOne.addEventListener("click", () => {
  navigateToURL("pageOne");
});
pageTwo.addEventListener("click", () => {
  navigateToURL("pageTwo");
});
