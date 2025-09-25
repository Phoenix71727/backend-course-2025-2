// Константа для дати (лютий 2022)
const date = "20220201";

// Базовий URL API НБУ
const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/res";

// Створюємо URL-об’єкт
const url = new URL(baseUrl);

// Додаємо параметри
url.searchParams.append("date", date);
url.searchParams.append("json", "");

// Виводимо у консоль
console.log(url.toString());
