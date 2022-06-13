const num = 113;
console.log(`шестнадцатеричный вид: ${num.toString(16)}; двоичный вид: ${num.toString(2)}`);


const data = +prompt('введите число');
let x = 2;
let plus = data + x,
    minus = data - x,
    multiply = data * x,
    divide = data / x;
console.log ("сумма:" + plus + "; разница: " + minus + "; умножение: " + multiply + "; деление: " + divide);
console.log(data.toString().length);
console.log(+(0.51000002.toFixed(2)) + 2);

// ==== СТРОКИ ====

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
console.log(str.indexOf(str_two));
console.log(str_two.toUpperCase());

//==== ЛОГИЧЕСКИЕ ОПЕРАЦИИ ====

let a = 1, b = 2, c = 3, d = 3;

let result_one = a > b || b > c || a < c;
let result_two = b > c || c == c;
let result_three = c == c || c < d;
console.log(result_one || result_two || result_three);

let result_four = a < b && b < c && a < c;
let result_five = b < c && c == c;
let result_six = c == c && c == d;
console.log(result_four && result_five && result_six);

//Задача со ЗВЕЗДОЧКОЙ, творческое задание:

console.log('777' == 777); //true
console.log('777' === 777); //false

let name;
console.log (name ?? 'Имя отсутствует'); //Имя отсутствует
let user_name = 'Эрих Мария Ремарк';
console.log (user_name ?? 'Имя отсутствует'); //Эрих Мария Ремарк