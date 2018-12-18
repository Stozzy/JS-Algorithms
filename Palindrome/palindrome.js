function palindrome (phrase) {
    initialPhrase = phrase.toLowerCase().replace(/[.@$%^&*(/)\,_#!?/]| /gi, '');
    reversePhrase = initialPhrase.split('').reverse().join('');

    return (initialPhrase === reversePhrase) ? true : false;
}
console.log(palindrome('B/O\B'));