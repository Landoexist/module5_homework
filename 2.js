let x = {}; //Любое значение

switch (typeof x) {
  case "number":
    console.log("x - число");
    break;
  case "boolean":
    console.log("x - логическая переменная");
    break;
  case "string":
    console.log("x - строка");
    break;
  default:
    console.log("Тип x не определён");
}
