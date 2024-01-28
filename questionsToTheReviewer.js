//В данном файле собраны вопросы по заданиям. Большое спасибо, что нашли время заглянуть сюда! 

//ВОПРОС 1
// Чем отличаются function declaration и function expression? Например эти две функции вроде бы работают одинаково

// function createPasswordChecker(pswdLengthMin, pswdLengthMax){
//     return function(password){
//         if(password.length <= pswdLengthMax && password.length >= pswdLengthMin){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// const createPasswordChecker = (pswdLengthMin, pswdLengthMax) => {
//     return  function(password){
//         if(password.length <= pswdLengthMax && password.length >= pswdLengthMin){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

//ВОПРОС 2
// как проверить есть ли у элемента дети, тк, если детей нет код пишет ошибку.
// И такая проверка у меня тоже пишет 
//Uncaught TypeError: Cannot read properties of undefined 

// function findElementByClass(root, className) {
//     if (root.childNode.length > 0 ) {
//         for (const element of root.children) {
//             if (element.className == className) {
//                 return element
//             }
//             return "element not found";
//         }
//     }
// }