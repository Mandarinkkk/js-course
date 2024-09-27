// Строка (string)
let stringVariable = "Hello, world!";
console.log(typeof stringVariable); // Выведет: "string"

// Число (number)
let numberVariable = 123;
console.log(typeof numberVariable); // Выведет: "number"

// Число с плавающей точкой (number)
let floatVariable = 3.14;
console.log(typeof floatVariable); // Выведет: "number"

// Булевое значение (boolean)
let booleanVariable = true;
console.log(typeof booleanVariable); // Выведет: "boolean"

// Объект (object)
let objectVariable = { name: "John", age: 30 };
console.log(typeof objectVariable); // Выведет: "object"

// Массив (object)
let arrayVariable = [1, 2, 3, 4, 5];
console.log(typeof arrayVariable); // Выведет: "object"

// Максимальное значение для чисел (Number.MAX_VALUE)
console.log(Number.MAX_VALUE); // Выведет: 1.7976931348623157e+308
// Максимальное значение для чисел в JavaScript ограничено 1.7976931348623157e+308. 


// Минимальное значение для чисел (Number.MIN_VALUE)
console.log(Number.MIN_VALUE); // Выведет: 5e-324
// Минимальное значение для чисел в JavaScript ограничено 5e-324. 
// Это связано с тем, что числа в JavaScript хранятся в формате IEEE-754 с двойной точностью. 
// Данный формат позволяет представлять числа в диапазоне от 
// -1.7976931348623157e+308 до 1.7976931348623157e+308, 
// но с очень маленьким шагом между числами вблизи нуля.

// Бесконечность (Infinity)
let infinityVariable = Infinity;
console.log(typeof infinityVariable); // Выведет: "number"
console.log(infinityVariable); // Выведет: Infinity

// Не число (NaN)
let nanVariable = NaN; 
console.log(typeof nanVariable); // Выведет: "number"
console.log(nanVariable); // Выведет: NaN
// NaN (Not a Number) — специальное значение, которое используется для представления 
// результатов операций, которые не могут быть представлены числом. 
// Например, деление на ноль.

