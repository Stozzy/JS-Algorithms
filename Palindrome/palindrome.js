function palindrome(str) {
    const initialPhrase = str.toLowerCase().replace(/[^A-Z0-9]|/gi, '');
    const reversePhrase = initialPhrase.split('').reverse().join('');

    return initialPhrase === reversePhrase;
};

palindrome("eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four") ;
palindrome("not a palindrome");
