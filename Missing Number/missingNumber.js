function missingNumber(array) {
    let sortArray = array.sort((a,b) => {
        return a-b;
    });

    return sortArray;
}

console.log(missingNumber([6,5,4,3,2,0]));
console.log(missingNumber([1,2,5,7,4,3,0]));