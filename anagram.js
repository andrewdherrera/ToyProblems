import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { workerData } from "worker_threads";

/*Given a single input string, write a function that produces all possible anagrams 
of a string and outputs them as an array. At first, don't worry about repeated strings. 
What time complexity is your solution?*/

// function isAnagram(words) {
//  var anagrams = {};

//  for (let i in words) {
//      var word = words[i];
     
     

//      if (anagrams[sorted] != null) {
//          anagrams[sorted].push(word);
//      }
//      else {
//          anagrams[sorted] = [word];
//      }
//  }

//  for (var sorted in anagrams) {
//      var words = anagrams[sorted];
//      var sep = ', ';
//      var out = "";
//      for (var n in words) {
//          out + sep + words[n];
//          sep = '';
//      }
//      return (sorted + ': ' + out + '');
//  }
// }

// function chMap(string) {
//     const charMap = {};
    
//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

let genAnagrams = (word, anagrams = [], anagram = '') => {
    //let anagrams = []; 
    //let anagram = '';
   
    if (!word){
      anagrams.push(anagram)
      return;
    }
    for (let i = 0; i < word.length; i++) {
     anagram += word[i];
     genAnagrams(word.slice(0,i) + word.slice(i + 1))
     anagram = anagram.slice(0, anagram.length -1);
    }
  return [...new Set(word)];
}
console.log(genAnagrams('ABC'));