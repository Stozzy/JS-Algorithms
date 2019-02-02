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
