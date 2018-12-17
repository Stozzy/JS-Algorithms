function reverseString (usrText) {
    let textToArray = usrText.split('');
    let reverseTextToArray = textToArray.reverse();
    let usrTextReverse = reverseTextToArray.join('');

    return usrTextReverse;
}

console.log(reverseString('code'));

function reverseString2 (usrText) {
    let textToArray = usrText.split('');

    return usrTextReverse = textToArray.join(textToArray.reverse());

}

console.log(reverseString2('code'));