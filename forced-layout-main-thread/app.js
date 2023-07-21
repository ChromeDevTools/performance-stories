let middleDiv = null;
function setup() {
  const container = document.getElementById("flex");
  for (let i = 0; i < 100_000; i++) {
    const div = document.createElement("div");
    const width = Math.floor(Math.random() * 200) + 20;
    const color = ["red", "blue", "green"][Math.floor(Math.random() * 3)];

    div.style.width = `${width}px`;
    div.style.height = "25px";
    div.style.backgroundColor = color;
    div.innerText = i;
    container.appendChild(div);
    if (i === 100) {
      middleDiv = div;
    }
  }
}
setup();

document.getElementById("thrash").addEventListener("click", () => {
  middleDiv.style.height = "400px";
  console.log(middleDiv.getBoundingClientRect())
});
