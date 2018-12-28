function digitSum(str) {
    const getNumbers = str.match(/[0-9]+/g) || [];
    let sum = 0;

    getNumbers.forEach((element) => {
            sum += Number(element);
    })

    return sum;
}

console.log(digitSum('2 apples, 12 oranges'));
console.log(digitSum('1234567'));
console.log(digitSum('All of your base, are belong to us'));