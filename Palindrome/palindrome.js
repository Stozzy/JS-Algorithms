function isPalindrome (phrase) {
    initialPhrase = phrase.toLowerCase().replace(/[.@$%^&*(/)\,_#!?/]| /gi, '');
    reversePhrase = initialPhrase.split('').reverse().join('');

    return (initialPhrase === reversePhrase) ? true : false;
}
console.log(isPalindrome('B/O\B'));