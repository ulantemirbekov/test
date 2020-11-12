console.log('Module_02 Task_03');


function findLongestWord (string = "") {
  
    const words = string.split(' ');
    
    let longestWord = words[0];
    
    let length = words.length;

    for (let i = 0; i < length; i += 1) {
        // console.log(words[i]);

        if (longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
   return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

// const favorite = "the road will be mastered be the walking";

// //console.log(favorite.length);
// const findLongestWord = function(string){
//     const words = string.split(' ');
//    let longestWord = words[0]

//     let length = words.length;
//  for (let i = 0; i<length; i+=1){
//     // console.log(words[i]);
//      if(longestWord.length < words[i].length){
//         longestWord = words[i]
//         }    
//     }
//  return longestWord;

//  //console.log(longestWord);
// //  return;
// }
// console.log(findLongestWord(favorite));