let arr = [1, "1", 1, 2, 3, 4, 5, 6, 0, "0", false, null, NaN];
let oddCounter = 0;
let evenCounter = 0;
let zeroCounter = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeroCounter++;
  }
  if (arr[i] % 2 == 0 && arr[i] !== 0 && typeof arr[i] == "number") {
    evenCounter++;
  }
  if (arr[i] % 2 == 1 && typeof arr[i] == "number") {
    oddCounter++;
  }
}
console.log(`Количество нечётных цифр: ${oddCounter}\nКоличество чётных цифр: ${evenCounter}\nКоличество нулей: ${zeroCounter}`);