//! TASKS
//? I)
// Написати ф-ю яка приймає рік. Повертає століття.

// const convertToCentury = function (y) {

//     return Math.floor(y / 100 + 1)
//     // return y / 100 + 1
// }

// console.log(convertToCentury(2345));

//? II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
//2) Всі роки які вводить користувач записується в масив years
// 3) Коли зупинився цикл потрібно перебрати масив years і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття


let year;

prompt




// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні






// const friends = users.reduce((acc, el) => {
//     return acc.concat(el.friends)
// }, [])


//     .filter((el, i, arr) => arr.indexOf(el) === i)
// console.log(friends);



// let arr = [3, 7, 9, 5, 10]

// console.log(arr.sort((a, b) => {
//     return b - a
// }))


//! TASK------------------------------------------

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];

// - Вывести массив имён учёных/изобретателей

const names = inventors.map(el => el.first)
console.log(names);

// - Вывести массив тех кто родился в 19-ом веке

const ninetyCentury = inventors.filter(el => el.year >= 1800 && el.year < 1900)
console.log(ninetyCentury);


// - Вывести массив тех, кто прожил больше 50-ти лет

const overAge = inventors.filter((el) => el.passed - el.year > 50)
console.log(overAge);

// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа

const name = inventors.map(el => {
    if (el.first === 'Marie') {
        return el = { ...el, married: "Pierre Curie" };
    } else { return el }
})
console.log(name);

// console.log(inventors.filter(el => el.last === 'Curie').map(el => el = { ...el, married: 'Pierre Curie' }))

// - Вывести фамилии тех, в чьём имени есть буква "е"

const hasE = inventors.filter(function (inventor) {
    return inventor.first.includes('e') || inventor.first.includes('E')

}).forEach(function (el) { console.log(el.last); });

// - Получить массив объектов отсортированный по имени (по алфавиту).

// console.log(arr.sort((a, b) => {
//     return b - a
// }))

console.log(inventors.sort((a, b) => {
    return a - b
}));

// - Найти сумму лет жизни всех учёных





// const century = function (y) {
//     return Math.floor(y / 100 + 1)
// }




// const overAge = inventors.filter((el) => {
//     let age = el.passed - el.year;
//     return age > 50;
// })
// console.log(overAge);




