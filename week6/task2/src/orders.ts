let orders: { date: string, amount: number }[] = [];

function addOrder(date: string, amount: number): void {
  orders.push({ date, amount });
}

function calculateFebruary2020Total(): number {
  const targetMonth = 1; 
  const targetYear = 2020;

  return orders
    .filter(order => {
      const orderDate = new Date(order.date);
      return orderDate.getFullYear() === targetYear && orderDate.getMonth() === targetMonth;
    })
    .reduce((sum, order) => sum + order.amount, 0);
}

document.getElementById("orderForm")!.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = (document.getElementById("date") as HTMLInputElement).value;
  const amount = parseFloat((document.getElementById("amount") as HTMLInputElement).value);

  if (date && !isNaN(amount)) {
    addOrder(date, amount);
  }
});

document.getElementById("calculateBtn")!.addEventListener("click", () => {
  const total = calculateFebruary2020Total();
  document.getElementById("result")!.innerText = `Общая сумма: ${total}`;
});
