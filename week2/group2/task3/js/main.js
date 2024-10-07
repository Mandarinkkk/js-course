const drawPyramid = (height) => {
    
    if (isNaN(height) || height < 1) {
        alert("Пожалуйста, введите целое число больше 0.");
        return;
    }

    const canvas = document.getElementById("pyramidCanvas");
    const ctx = canvas.getContext("2d");
    let squareSize = 11;
    let gap = 10;
    let canvasWidth = canvas.width
    
    // Очистка канваса перед рисованием
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < height; i++) {
    let blocks = 2 * (i + 1);
    let offset = (canvasWidth - (blocks * squareSize + (blocks - 1) * gap)) / 2;

    for (let j = 0; j < blocks / 2; j++) {
      let x = offset + j * (squareSize + gap) - gap;
      let y = i * (squareSize + gap);
      ctx.fillRect(x, y, squareSize, squareSize);
      let xc = offset + (blocks / 2 + j) * (squareSize + gap);
      let yc = i * (squareSize + gap);
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, squareSize, squareSize);
      ctx.fillRect(xc, yc, squareSize, squareSize);
    }
    }
};

const main = () => {
    let result = document.getElementById("result");
    let height = document.getElementById("height").value;
    result.innerHTML = drawPyramid(height);
};

document.getElementById("drawPyramid").addEventListener("click", main);
