const N = Math.floor(Math.random() * 10) + 1; //Задаём случайный размер массива 1..10
console.log("Количество элементов массива: " + N); //Размер массива
let arr = [];
console.log("Массив содержит элементы:");
for (let i = 0; i < N; i++) {
  arr.push(Math.ceil(Math.random() * 101)); //Заполняем массив значениями 0..100
  console.log(`Под индексом ${i} находится элемент ${arr[i]}`); //Вывод элементов массива
}
console.log(arr); //Массив