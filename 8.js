let firstMap = new Map();

firstMap.set('tomato','red');
firstMap.set('avocado','green');
firstMap.set('cucumber','green');
firstMap.set('pumpkin','yellow');

for (let elem of firstMap) {
    console.log(`Ключ = ${elem[0]}, значение = ${elem[1]}`);
}