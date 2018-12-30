function sumOfDifference (numArray) {
    const minNumber = Math.min(...numArray);
    const maxNumber = Math.max(...numArray);
    let numberSum = 0;

    for (let i = minNumber; i <= maxNumber; i++) {
        numberSum += i;
    }

    return numberSum;

}

console.log(sumOfDifference([10, 5]));
console.log(sumOfDifference([3, 7]));