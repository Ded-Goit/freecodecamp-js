`use strict`;
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
/*Об'єкт apartment містить три властивості:

descr зі значенням "Spacious apartment in the city center",
rating зі значенням 4,
price зі значенням 2153.
Масиви keys та values:

keys зберігатиме ключі об'єкта.
values зберігатиме значення відповідних ключів.
Цикл for...in перебирає всі ключі об'єкта apartment:

key містить назву кожної властивості ("descr", "rating", "price").
apartment[key] отримує відповідне значення ("Spacious apartment in the city center", 4, 2153).
push() додає значення у відповідні масиви.

У результаті:

keys = ["descr", "rating", "price"]
values = ["Spacious apartment in the city center", 4, 2153]*/

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment); // Отримуємо масив ключів
const values = [];
for (const key of keys) {
  values.push(apartment[key]); // Отримуємо значення за ключем і додаємо в масив values
}
/*Метод Object.keys(apartment)

Отримуємо масив ключів об'єкта apartment:
js
Копировать
Редактировать
["descr", "rating", "price"]
Цикл for...of

Перебираємо отриманий масив ключів.
Використовуємо apartment[key], щоб отримати значення для кожного ключа.
Додаємо значення в масив values.
Результати:

keys = ["descr", "rating", "price"]
values = ["Spacious apartment in the city center", 4, 2153]*/

/*function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}
Виконай рефакторинг функції countProps(object), 
замінивши перебір ключів за допомогою циклу for…in 
на метод Object.keys() для отримання масиву властивостей.
 Функція має повернути кількість властивостей в об'єкті object.*/
function countProps(object) {
  return Object.keys(object).length;
}
/*Object.keys(object) Повертає масив ключів переданого об'єкта.
.length Визначає довжину отриманого масиву, що дорівнює кількості властивостей.*/

/*Запиши у змінну keys масив ключів властивостей об'єкта apartment,
 а у змінну values - масив їх значень. 
 Використовуй методи Object.keys() і Object.values().*/
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment); //Отримує масив ключів об'єкта apartment
const values = Object.values(apartment); //Отримує масив значень відповідних ключів

/*Функція countTotalSalary(salaries) приймає об'єкт зарплат 
(salaries) в якості параметра. Кожна властивість об'єкта 
salaries — це ключ, що містить ім'я співробітника, та значення 
- його відповідна зарплатня.
Доповни код функції countTotalSalary(salaries) так, щоб вона 
повертала загальну суму зарплат всіх співробітників.
Поради:Ініціалізуй змінну totalSalary зі значенням 0, 
яка буде відповідати за загальну суму зарплат усіх співробітників
Використай метод Object.values() для отримання значень (зарплат)
 з об'єкта salaries Пройдись по отриманих значеннях за допомогою
циклу та додай кожне значення до змінної totalSalary.
Поверни totalSalary як результат*/
function countTotalSalary(salaries) {
  let totalSalary = 0; // Ініціалізація змінної для підсумку зарплат

  const salaryValues = Object.values(salaries); // Отримуємо масив значень зарплат

  for (const salary of salaryValues) {
    totalSalary += salary; // Додаємо кожну зарплату до загальної суми
  }

  return totalSalary; // Повертаємо загальну суму
}

/*Масив colors містить колекцію кольорів. Кожен колір представлений 
об'єктом і має властивості hex і rgb з відповідними для цього формату
 і кольору значеннями.
Перебери масив об'єктів colors, використовуючи цикл for...of. 
Додай у масив hexColors значення властивостей hex, 
а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.*/
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
//Ініціалізуємо масиви hexColors та rgbColors для збереження значень.
const hexColors = [];
const rgbColors = [];
/*Перебираємо масив colors за допомогою for...of:
color.hex додаємо в hexColors.
color.rgb додаємо в rgbColors.*/
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
/*Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.*/
function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  /*Цикл for...of перебирає кожен продукт:
Якщо product.name збігається з productName,
 повертаємо product.price.*/
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  //Якщо жоден товар не знайдено, функція повертає null.
  return null;
}
