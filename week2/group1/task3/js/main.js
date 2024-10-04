const isGoodWeather = (temperature, precipitation, wind, humidity) => {
    if (temperature === "тепло" && (precipitation === "ясно" || precipitation === "облачно") && wind === "нет" && humidity === "низкая") {
        return 'Да';
    }
    else {
        return "Нет";
    }
};

const main = () => {
    let result = document.getElementById("result");
    let temperature = document.getElementById("temperature").value;
    let precipitation = document.getElementById("precipitation").value;
    let wind = document.getElementById("wind").value;
    let humidity = document.getElementById("humidity").value;
    result.innerHTML = isGoodWeather(temperature, precipitation, wind, humidity);
};

document.getElementById("checkPlay").addEventListener("click", main);
