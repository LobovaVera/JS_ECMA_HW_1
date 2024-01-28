"use strict";

//sem
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// function mergeArrays(arr1, arr2){
//     return [...arr1, ...arr2]; 
// }
//  console.log(mergeArrays([3, 23, 3], [4, 5, 6]));

//  //teachers
//  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// // 2. Создайте функцию removeDuplicates, которая принимает
// // любое количество аргументов и возвращает новый
// // массив, содержащий только уникальные значения.
// // Используйте rest оператор для сбора всех аргументов в
// // массив а затем filter для определения дубликатов.
// // removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// // результат: [1, 2, 3, 4, 5]


// function removeDuplicates(...rest){

//    return rest.filter((num1, num2) => rest.indexOf(num1) === num2 );
// }

// 
// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(arr){
//     return arr.filter((num) => !(num % 2));
// }
// const arr7 = [1, 2, 3, 2, 4, 1, 5, 16, 18];
// // console.log(getEvenNumbers(arr7))

// //teaachers
// const getEvenNumbers = (...numbers) => numbers.filter((num) => !(num % 2));
// console.log(getEvenNumbers(1, 2, 3, 4, 5, 6));
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// function calculateAverage(arr){

//     return Math.round((arr.reduce((acc, num) => acc + num, 0) / (arr.length)) * 100) / 100;
// }
// console.log(calculateAverage(arr7));
//techers
// const calculateAverage  = (...params) => params.reduce((acc, a) => acc+a, 0) / params.length;
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(string){
//     const wordsArr = string.split(" ");
//     const resultArr = wordsArr.map((word) => word[0].toUpperCase() + word.substring(1));
//     const resultString = resultArr.join(" ");

//     return resultString;
// }

// //techers
// const capitalizeFirstLetter = (string) =>{

// return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeFirstLetter("которая принимает строку в качестве аргумента и возвращает новую строку"));
// console.log("message".slice(1));
// console.log("message".substring(1));

// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(num = 0){
//     let value = num;
//     return{
//         add:(num) => {value += num},
//         substract:(num) => {value -= num},
//         result: function() {
//             return value;
//         }
//     }

// }
// const calculator1 = createCalculator(4);
// calculator1.add(5);
// console.log(calculator1.result());
// calculator1.substract(3);
// console.log(calculator1.result());

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"
// function createGreeting(name){
//     return function(){return ( `Hello, ${name}`);}
// }
// const greeting = createGreeting("Vera");
// console.log(greeting());

// DOM
// console.log(navigator.platform);
// let html = document.documentElement;
// let body = document.body;
// let head = document.head;
// console.log(html, body, head);
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);

// }
// for (const child of document.body.childNodes) {
//     console.log(child)
// }
// let arr = Array.from(document.body.childnodes);
// arr.forEach((elem) => console.log(elem));
// let first = html.firstChild;
// let last = html.lastChild;
// //let first = html.childNodes[0];
// //let html.childNodes[html.childNodes.length -1]
// //.hasChildNodes();
// console.log(first);
// console.log(last);
// for (const child of document.body.children) {
//     console.log(child);
// }
// //.nextSibling
// //.previousSibling
// console.log(head.nextSibling)

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true
// function createPasswordChecker(pswdLengthMin, pswdLengthMax){
//     return function(password){
//         if(password.length <= pswdLengthMax && password.length >= pswdLengthMin){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// const createPasswordChecker = (num) => {
//     return  function(password){
//         if(password.length <= pswdLengthMax && password.length >= pswdLengthMin){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// const isPasswordValid = createPasswordChecker(4, 6);
// console.log(isPasswordValid('password')); 
// console.log(isPasswordValid('secret')); 

// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:


// const sumDigits = (num) => {

//     return function sum() {
//         if (num < 10) {
//             result += num;
//             return result;
//         } else {
//             result += num % 10;
//             sum((num - (num % 10)) / 10);
//         }
//     }  

// }
// const sumDigits = (num) => {
//     if (num < 10) {
//         return num;
//     } else {
//         return num % 10 + sumDigits(Math.floor(num / 10));
//     }
// }



// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)