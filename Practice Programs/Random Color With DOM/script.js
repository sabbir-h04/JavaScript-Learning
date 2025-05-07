let boxes = document.querySelectorAll(".box");
console.log(boxes);

function randomColor() {
  let colors = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
  };

  let colorName = colors[Math.floor(Math.random() * 4) + 1];
  return colorName;
}

boxes.forEach((e) => {
  e.style.backgroundColor = randomColor();
});
