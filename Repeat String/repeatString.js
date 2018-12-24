function repeatString(string, number) {
    let i = 0;
    let repeatedString = '';
    
    while (number > 0) {
        repeatedString = repeatedString.concat(str);
        // repeatedString += string;
        number--;
    }
    return repeatedString;
}

console.log(repeatString('Jamestown', 2))