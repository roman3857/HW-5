let drink = "Кава";

switch (drink) {
  case "Кава":
    console.log("Ви обрали каву");
    break;
  case "Чай":
    console.log("Ви обрали чай");
    break;
  case "Сік":
    console.log("Ви обрали сік");
    break;
  default:
    console.log("Напій не знайдено");
}

let day = "Понеділок";

switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "Пʼятниця":
    console.log("Це робочий день 💼");
    break;
  case "Субота":
  case "Неділя":
    console.log("Це вихідний день 🎉");
    break;
  default:
    console.log("Невірно введений день");
}

let month = 3;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невірний номер місяця");
}

let color = "червоний";

switch (color) {
  case "червоний":
    console.log("Стоп");
    break;
  case "зелений":
    console.log("Йти");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  default:
    console.log("Невідомий колір");
}

let num1 = 10;
let num2 = 5;
let operator = "/";

switch (operator) {
  case "+":
    console.log("Результат:", num1 + num2);
    break;
  case "-":
    console.log("Результат:", num1 - num2);
    break;
  case "*":
    console.log("Результат:", num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль неможливе ❗");
    } else {
      console.log("Результат:", num1 / num2);
    }
    break;
  default:
    console.log("Невідомий оператор");
}
