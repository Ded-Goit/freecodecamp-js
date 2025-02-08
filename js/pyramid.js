`use strict`;
//const character = '#';
//const count = 8;
//const rows = [];
//step47 Оголошення функції padRow. Ще не створюйте жодних змінних параметрів. Тіло функції має бути порожнім. Пам’ятайте, що вам потрібно використовувати верблюжий регістр для іменування.
//function padRow(name) {
//  return name;
//}
//function addTwoNumbers(num1, num2) {
//  return num1 + num2;
//}

//const sum = addTwoNumbers(5, 10);
//console.log(sum);
//padRow();
//const call = padRow('name'); //step49 Щоб побачити результат виклику вашої функції padRow, оголосите змінну виклику та призначте існуючий виклик padRow цій змінній.
// step48Викличте свою функцію padRow.
//console.log(call); // step50Тепер додайте оператор журналу, щоб надрукувати значення вашої змінної виклику.

//for (let i = 0; i < count; i = i + 1) {
//rows.push(i);
//rows.push(character); //step44 Замість того, щоб надсилати i до масиву, надішліть значення вашої символьної змінної.
//rows.push(character.repeat(i)); //step45 Використовуйте метод .repeat() для свого персонажа та дайте йому i як номер.
//  rows.push(character.repeat(i + 1)); //step46 Ти стаєш ближче! На цьому етапі ви зіткнулися з так званою
// помилкою «off-by-one» — частою проблемою в мовах індексування з нульовим значенням, як-от JavaScript.
//Перший індекс вашого масиву рядків дорівнює 0, тому ви починаєте цикл for з i = 0. Але повторення рядка нуль разів не призведе до того, що його буде надруковано.
//Щоб виправити це, додайте 1 до значення i у вашому виклику .repeat(). Не призначайте його назад i, як ви робили в умовах циклу.
//}

//let result = '';

//for (const row of rows) {
//result = result + row;
//result = result + row + '\n'; //step43 Використовуйте другий оператор додавання, щоб додати новий рядок після результату та значень рядка.
//}

//console.log(result);
const character = '!';
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = '';

for (const row of rows) {
  result = result + row + '\n';
}

console.log(result);
