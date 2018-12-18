function reverseString (word) {
    let reverseWord = reverseWord.split('');
    reverseWord = reverseWord.reverse();
    reverseWord = reverseWord.join('');
    // joining methods together to lean up the code...
    // reverseWord = reverseWord.split('').reverse().join('');
    return reverseWord;
}

console.log(reverseString('code'));