const drawPyramid = (height) => {
    
    
    if (isNaN(height) || height < 1) {
        alert("Пожалуйста, введите целое число больше 0.");
        return;
    }

    const canvas = document.getElementById("pyramidCanvas");
    const ctx = canvas.getContext("2d");
    
    // Очистка канваса перед рисованием
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseWidth = height * 20; // Ширина основания пирамиды
    const startX = (canvas.width - baseWidth) / 2; // Начальная позиция по X

    for (let i = 0; i < height; i++) {
        const currentWidth = baseWidth - (i * 20); // Уменьшаем ширину на каждом уровне
        const startY = canvas.height - ((i + 1) * 20); // Позиция по Y

        ctx.fillStyle = `hsl(${(i / height) * 360}, 100%, 50%)`; // Цвет уровня
        ctx.fillRect(startX + (i * 10), startY, currentWidth, 20); // Рисуем уровень пирамиды
    }
};

const main = () => {
    let result = document.getElementById("result");
    let height = document.getElementById("height").value;
    result.innerHTML = drawPyramid(height);
};

document.getElementById("drawPyramid").addEventListener("click", main);
