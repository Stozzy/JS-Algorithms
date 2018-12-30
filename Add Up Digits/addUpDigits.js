function addUpDigits(num) {
    let strArray = num.toString().split('');
    let digitSum = 0;

    for (let i = 0; i < strArray.length; i++) {
        digitSum += Number(strArray[i]);
    }

    return digitSum;

}

console.log(addUpDigits(22));
console.log(addUpDigits(987));