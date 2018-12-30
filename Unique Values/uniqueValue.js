function uniqueValues(array1, array2) {
    let uniqueArray = [];

    for (let value of array1) {
        if (array2.includes(value) === false && uniqueArray.includes(value) === false) {
            uniqueArray.push(value);
        }
    }

    for (let value of array1) {
        if (array1.includes(value) === false && uniqueArray.includes(value) === false) {
            uniqueArray.push(value);
        }
    }

    return uniqueArray;
}

console.log(uniqueValues([1,2,3,4,5], [1,2,3,5]));
console.log(uniqueValues([1,2,4], [4,2,1]));
console.log(uniqueValues(['pig', 'cat', 11, 'abc',1,2,3], ['pigs', 'cat', 33, 'abc',1,2]));