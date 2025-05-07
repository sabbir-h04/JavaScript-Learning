let boxes = document.querySelectorAll(".box");
console.log(boxes);

function randomColor() {
  let value1 = Math.floor(Math.random() * 256);
  let value2 = Math.floor(Math.random() * 256);
  let value3 = Math.floor(Math.random() * 256);
  return `rgb(${value1}, ${value2}, ${value3})`;
}

boxes.forEach((e) => {
  e.style.backgroundColor = randomColor();
});
