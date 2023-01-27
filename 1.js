const NUM = +prompt("Введите число");
var output;
if (typeof NUM == "number" && !isNaN(NUM)) {
  output = (NUM % 2 == 0) ? "Число чётное" : "Число нечётное";
} else {
  output = "Упс, кажется, вы ошиблись";
}
console.log(output);