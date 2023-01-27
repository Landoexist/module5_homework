let arr = [1, "1", 1];
let sample = arr[0];
let checkResult;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === sample) checkResult = true;
  else {
    checkResult = false;
    break;
  }
}
console.log(checkResult);
