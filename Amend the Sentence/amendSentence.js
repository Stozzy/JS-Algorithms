function amendSentance (str) {
    let strArray = str.split("")

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== strArray[i].toLowerCase()) {
            strArray[i] = strArray[i].toLowerCase();
            strArray.splice(i, 0, " ");
        }
    }
 
    strArray = strArray.join("").trim();

    return strArray;
}

console.log(amendSentance('AllOfYourBaseAreBelongToUs'));
console.log(amendSentance('TrueStoryBro'));