function duplicateNumbers(array) {
    const sortArray = array.sort((a, b) => {
        return a - b;
    });

    for (let i = sortArray[0]; i < sortArray.length; i++) {
        if (i === sortArray[i]) {
            return true;
        } else {
            return false;
        }
    }

    return i;
}

console.log(duplicateNumbers([1,2,3,1]));
console.log(duplicateNumbers([3,1]));
console.log(duplicateNumbers([0,4,5,0,3,6]));