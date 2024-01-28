// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter(num = 0){
    let counter = num;
    return{
        increment:(num) => counter += num,
        decrement:(num) => counter -= num,
        getResult:() => counter

    }
}



const counter1 = createCounter(10);
counter1.increment(2);
counter1.increment(3);
console.log(counter1.getResult());
counter1.decrement(4);
console.log(counter1.getResult());
