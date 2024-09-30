const calculate = (l) => { // Функция, которая вычисляет объем икосаэдра по длине ребра.
  return (((5 * (l ** 3)) * (3 + Math.sqrt(5)))/ 12); 
  // Вычисление объема по формуле V = (5 * l^3 * (3 + √5)) / 12
};

const main = () => { // Объявление функции main
  let result = document.getElementById("result"); //Обозначение тега result по его id
  let l = document.getElementById("l").value; //Получение значения из input с id 'l'
  result.innerHTML = calculate(l); // Изменение содержимого тега result
};

document.getElementById("submit").addEventListener("click", main); // Ожидание нажатия кнопки, при нажатии запуск функции main
