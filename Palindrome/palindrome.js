<<<<<<< HEAD
function isPalindrome (phrase) {
=======
function palindrome (phrase) {
>>>>>>> 955d3c4de582a54cb67517c58b6ff977a0317f0e
    initialPhrase = phrase.toLowerCase().replace(/[.@$%^&*(/)\,_#!?/]| /gi, '');
    reversePhrase = initialPhrase.split('').reverse().join('');

    return initialPhrase === reversePhrase
}
<<<<<<< HEAD
<<<<<<< HEAD
console.log(isPalindrome('B/O\B'));
=======
console.log(palindrome('B/O\B'));
>>>>>>> 955d3c4de582a54cb67517c58b6ff977a0317f0e
=======
console.log(palindrome('B/O\B'));
>>>>>>> 347a500589361fba251fa5e982dae74974b2217c
