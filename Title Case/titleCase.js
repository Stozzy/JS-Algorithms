function titleCase (str) {
    let strArray = str.split(' ');
    let firstLetterArray = [];
    let remainingLettersArray = [];
    
    for (let i = 0; i < strArray.length; i++) {
        let lengthOfWord = strArray[i].length;
        firstLetterArray.push(strArray[i].slice(0,1).toUpperCase());
        remainingLettersArray.push(strArray[i].slice(1, lengthOfWord));
    }
   return firstLetterArray;
}
// need to finish concat both arrays into one array and join it for a string.

console.log(titleCase('all of your base are belong to us'))
