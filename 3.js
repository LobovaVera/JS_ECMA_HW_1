// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
function findElementByClass(root, className) {
    if (root.children.length > 0) {
        for (const element of root.children) {

            if (element.className == className) {
                return element;
            }
        }  
         return "element not found";
    }
    return "element has no children";
}
//document.body.style.background = 'cornflowerblue';
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
