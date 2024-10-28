"use strict";
function validateSalesData(data) {
    const salesDataPattern = /^[a-zA-Z]+ \S+ \d+$/;
    for (const line of data) {
        if (!salesDataPattern.test(line)) {
            return false;
        }
    }
    return true;
}
function calculateSales(data) {
    const salesMap = new Map();
    data.forEach(line => {
        const [customer, item, quantityStr] = line.split(' ');
        const quantity = parseInt(quantityStr);
        if (!salesMap.has(customer)) {
            salesMap.set(customer, new Map());
        }
        const customerItems = salesMap.get(customer);
        customerItems.set(item, (customerItems.get(item) || 0) + quantity);
    });
    return salesMap;
}
const main = () => {
    const result = document.getElementById("result");
    const inputData = document.getElementById("sales").value.trim().split('\n');
    if (!inputData.length) {
        result.innerText = "Пожалуйста, введите данные о продажах.";
        return;
    }
    if (!validateSalesData(inputData)) {
        result.innerText = "Некорректный формат данных. Каждый ввод должен содержать имя покупателя, товар и количество (число), разделенные пробелами.";
        return;
    }
    const salesData = calculateSales(inputData);
    let output = '';
    Array.from(salesData.keys()).sort().forEach(customer => {
        output += `${customer}:\n`;
        const items = salesData.get(customer);
        Array.from(items.keys()).sort().forEach(item => {
            output += `${item} ${items.get(item)}\n`;
        });
    });
    result.innerText = output;
};
document.getElementById("generateSalesReport").addEventListener("click", main);
//# sourceMappingURL=index.js.map