<<<<<<< HEAD
function longestWord (str) {
    return;
}
=======
// function longestWordInString (str) {
//     let arraySize = str.legth - 1;
//     let temp = str.split('');
//     let wordLengthArray = [];
//     let count = 0;
    
//     temp.forEach((element) => {
//         if (element != ' ') {
//             count++;
//         } else {
//             wordLengthArray.push(count);
//             count = 0;
//         }
//     });
//     return Math.max.apply(null, wordLengthArray);
// }

// After watching a solution I realized I did not fully understand split() method completely:

function longestWordInString (str) {
    let longestLength = 0;
    let strArray = str.split(' ');

    for (let i = 0; i < strArray.length; i++) {
        if (longestLength < strArray[i].length) {
            longestLength = strArray[i].length;
        }
    // Tenary operators to elminate the if stmt as it's a simple conditional check
    }
    return longestLength;
}

console.log(longestWordInString('All of your base are belong to us'));
>>>>>>> 347a500589361fba251fa5e982dae74974b2217c
