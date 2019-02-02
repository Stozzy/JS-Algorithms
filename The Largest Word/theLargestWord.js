function theLargestWord(str) {
    let cleanUpArray = str.replace(/[\W_]/g, ' ').split(' ');
    let longestWord = '';

    cleanUpArray.forEach((word) => {
        longestWord = word.length > longestWord.length ? word : longestWord;
    })
    // Tenary operators to elminate the if stmt as it is a simple conditional check
    return longestWord;
}

console.log(theLargestWord('All of your base, are belong to us!'));
