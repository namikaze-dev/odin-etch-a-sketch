let numberOfSquares = 36;
let randomColor = false;
let color = "black";

const drawCanvas = () => {
  const canvas = document.querySelector(".canvas");
  const canvasHeight = canvas.clientHeight;
  const canvasWidth = canvas.clientWidth;
  canvas.innerHTML = "";

  const borderOffset = (numberOfSquares - 1) * (1);
  const canvasHeightActual = canvasHeight - borderOffset;
  const canvasWidthActual = canvasWidth - borderOffset;

  for (let i = 0; i < numberOfSquares; i++) {
    const boxRowWidth = canvasHeightActual / numberOfSquares;
    const boxRowHeight = canvasWidthActual / numberOfSquares;

    const boxRow = document.createElement("div");
    boxRow.classList.add("box-row");
    boxRow.style.height = `${boxRowHeight}px`;
    // box.style
    for (let j = 0; j < numberOfSquares; j++) {
      const boxWidth = boxRowWidth;
      const boxHeight = boxRowHeight;
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.minWidth = `${boxWidth}px`;
      box.style.minHeight = `${boxHeight}px`;
      boxRow.appendChild(box);

      box.addEventListener("pointermove", () => {
        box.style.backgroundColor = randomColor ? getRandomColor() : color;
        box.style.opacity = box.style.opacity ? Number(box.style.opacity) + 0.1 : 0.1;
      });
      box.addEventListener("pointermove", () => {
        box.style.backgroundColor = randomColor ? getRandomColor() : color;
      });
    }
    canvas.appendChild(boxRow);

    if (i === 0) {
      boxRow.classList.add("box-row-add-extra-border")
    }

    if (i === numberOfSquares - 1) {
      boxRow.classList.add("box-row-rm-extra-border")
    }
  }
}

const getRandomColor = () => {
  const colors = "red orange yellow green blue purple pink".split(" ");
  const index = Math.floor(Math.random() * (colors.length - 1));
  return colors[index];
}

const buttonGridSize = document.querySelector("#btn-grid-size");
buttonGridSize.addEventListener("click", () => {
  numberOfSquares = parseInt(prompt("Enter size: [max: 100]"));
  numberOfSquares = Math.min(numberOfSquares, 100);
  drawCanvas();
});

const buttonRandomColor = document.querySelector("#btn-random-color");
buttonRandomColor.addEventListener("click", () => {
  randomColor = !randomColor;
  buttonRandomColor.classList.toggle("btn-blue-transform", randomColor);
});

const input = document.querySelector("input");
input.value = "black";
color = input.value;
input.addEventListener("input", (e) => {
  color = e.target.value;
});

drawCanvas();