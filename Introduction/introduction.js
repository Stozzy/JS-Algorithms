function introduction(first, last) {
    const introTxt = 'Hi, my name is ';
    
    return introTxt.concat(first, ' ', last);
}


function introduction2(first, last) {
    const introTxt = 'Hi, my name is ' .concat(first, " ", last, ".");
    
    return introTxt;
}


function introduction3(first, last) {
    const introTxt = 'Hi, my name is ${first} ${last}.';
    
    return introTxt;
}

console.log(introduction('Stan', 'Goldyn'))
console.log(introduction2('Stan', 'Goldyn'))
console.log(introduction3('Stan', 'Goldyn'))