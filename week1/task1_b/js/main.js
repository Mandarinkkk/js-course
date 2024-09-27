const main = () => { // Объявление функции main
    let greeting = document.getElementById('greeting'); // Обозначение тега greeting по его айди
    let userName = document.getElementById('userName').value; // Получение значения из input
    return greeting.innerHTML = 'Привет, ' + userName + '!'; // Изменение содержимого заданного тега p
}
document.getElementById('button').addEventListener('click',main) // Ожидание нажатия кнопки, при нажатии запуск функции main
