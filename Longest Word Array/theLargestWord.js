function theLargestWord(str) {
    let cleanUpStr = str.replace(/[\W_]/g, ' ');    
    let strArray = cleanUpStr.split(' ');
    let longestWord = '';
    let longestLength = 0;

    for (i = 0; i < strArray.length; i++) {
        if (longestLength < strArray[i].length) {
            longestLength = strArray[i].length;
            longestWord = strArray[i];
        }
    }
    
    return longestWord;
}

console.log(theLargestWord('All of your base, are belong to us!'));