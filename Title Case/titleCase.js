// function titleCase (str) {
//     let strArray = str.split(' ');
//     let firstLetterArray = [];
//     let remainingLettersArray = [];
    
//     for (let i = 0; i < strArray.length; i++) {
//         let lengthOfWord = strArray[i].length;
//         firstLetterArray.push(strArray[i].slice(0,1).toUpperCase());
//         remainingLettersArray.push(strArray[i].slice(1, lengthOfWord));
//     }
//
//     for (let i = 0; i < firstLetterArray.length; i++) {
//    	  strOutput += firstLetterArray[i] + remainingLettersArray[i] + ' ';
//     }
//
//    return strOutput;
// }

// THE SNIPPET BELOW IS INSPIRED BY FCC
// function titleCase(str) {
//   let convertToArray = str.toLowerCase().split(" ");
//   let result = convertToArray.map(function(val) {
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }
// titleCase("all of YOUR Base are BELong tO us");


function titleCase (str) {
    let titleCaseArray = str.split(' ');
		
        titleCaseArray = titleCaseArray.map((word) => {
			const firstLetter = word.charAt(0).toUpperCase();
			word = firstLetter.concat(word.slice(1, word.length));
			return word;
		});
	
    titleCaseArray = titleCaseArray.join(' ');
	
    return titleCaseArray;
}

console.log(titleCase('all of your base are belong to us'))
