function isDigit(str) {
    const digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return digitArray.includes(str);
}

console.log(isDigit('2'));
