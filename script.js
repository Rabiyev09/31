let number = prompt("Введите число:");

if (number > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}




let deleteFile = confirm("Вы хотите удалить файл?");

if (deleteFile) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
}




let age = prompt("Введите ваш возраст:");

if (age < 18) {
    console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}





let num = prompt("Введите число:");

let result = (num % 2 === 0) ? "Четное число" : "Нечетное число";

console.log(result);




let day = Number(prompt("Введите номер дня недели (1-7):"));

switch (day) {
    case 1:
        console.log("Понедельник");
        break;

    case 2:
        console.log("Вторник");
        break;

    case 3:
        console.log("Среда");
        break;

    case 4:
        console.log("Четверг");
        break;

    case 5:
        console.log("Пятница");
        break;

    case 6:
        console.log("Суббота");
        break;

    case 7:
        console.log("Воскресенье");
        break;

    default:
        console.log("Некорректное значение");
}



let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));

if (num1 === num2) {
    console.log("Числа равны");
} else {
    let compare = (num1 >= num2) ? "Первое число больше" : "Второе число больше";
    console.log(compare);
}




let month = Number(prompt("Введите номер месяца (1-12):"));

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
        console.log("Лето");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;

    default:
        console.log("Некорректный номер месяца");
}