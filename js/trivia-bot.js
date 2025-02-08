`use strict`;
// 1. Виведення вітального повідомлення
console.log("Hello! I'm your coding fun fact guide!");

// 2. Оголошення змінної botName та надання їй значення
let botName = 'TriviaBot';

// 3. Оголошення змінної botLocation та надання їй значення
let botLocation = 'Cyberspace';

// 4. Оголошення змінної favoriteLanguage та надання їй значення
let favoriteLanguage = 'JavaScript';

// 5. Виведення інформації про бота з використанням конкатенації рядків
console.log('My name is ' + botName + ' and I live on ' + botLocation + '.');

// 6. Виведення інформації про улюблену мову за допомогою конкатенації рядків
console.log('My favorite programming language is ' + favoriteLanguage + '.');

// 7. Оголошення нової змінної codingFact
let codingFact =
  favoriteLanguage + ' was created by Brendan Eich in just 10 days!';

// 8. Виведення першого факту (codingFact) в консоль
console.log(codingFact);

// 9. Призначення нової значення змінній codingFact з використанням favoriteLanguage та виведення його
codingFact =
  favoriteLanguage + ' is the most popular language for web development.';
console.log(codingFact);

// 10. Призначення іншого значення змінній codingFact, яке містить favoriteLanguage, та виведення його
codingFact =
  favoriteLanguage +
  ' can be used for both front-end and back-end development.';
console.log(codingFact);

// 11. Виведення прощального повідомлення, яке містить змінні botName та botLocation
console.log(
  'It was fun sharing these facts with you. Goodbye! - ' +
    botName +
    ' from ' +
    botLocation +
    '.'
);
