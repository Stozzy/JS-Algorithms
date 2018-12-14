function introduction(first, last){
    let introTxt = 'Hi, my name is ';
    return introTxt.concat(first, ' ', last);
}

console.log(introduction('Stan', 'Goldyn'))