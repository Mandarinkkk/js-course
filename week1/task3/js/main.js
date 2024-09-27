const main = () => { // Объявление функции main
  let result = document.getElementById("result"); //Обозначение тега result по его id
  let l = document.getElementById("l").value; //Получение значения из input с id 'l'
  return (result.innerHTML = (((5 * (l ** 3)) * (3 + Math.sqrt(5)))/ 12)); // Изменение содержимого тега result, расчёт объёма икосаэдра
};

document.getElementById("submit").addEventListener("click", main); // Ожидание нажатия кнопки, при нажатии запуск функции main
