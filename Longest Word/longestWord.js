function longestWordInString (str) {
    let arraySize = str.legth - 1;
    let temp = str.split('');
    let wordLengthArray = [];
    let count = 0;
    
    temp.forEach((element) => {
        if (element != ' ') {
            count++;
        } else {
            wordLengthArray.push(count);
            count = 0;
        }
    });
    return Math.max.apply(null, wordLengthArray);
}
console.log(longestWordInString('Good bye son'))