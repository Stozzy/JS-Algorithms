function firstDuplicate(numArray) {
    let objOfDuplicates = new Object;

    for (let num of numArray) {
        if (objOfDuplicates.hasOwnProperty(num)) {
            return num;
        }
        objOfDuplicates[num] = null;
        // you need to set a value to a key even if it's undefined.
    }
    
    return -1;
}

console.log(firstDuplicate([2,3,3,1,5,2]));
console.log(firstDuplicate([2,2]));
console.log(firstDuplicate([2,1,3]));