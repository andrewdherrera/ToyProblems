function isPalindrome(string) {
 var rev = string.split('').reverse().join('');

 return string == rev;
}

var longestPalindrome = function(str) {
    let maxLength = 0;
     maxL = '';
    
     for (let i = 0; i < str.length; i++) {
         let subS1 = str.substr(i, str.length);
         //console.log(subS1)
         for (let j = subS1.length; j >= 0; j--){
             let subS2 = subS1.substr(0, j);
             //console.log(subS2)
             
             if (isPalindrome(subS2)) {
                //console.log(subS2)
                 if (subS2.length > maxLength){
                     maxLength = subS2.length;
                     maxL = subS2;
                    }
                }
            }
        }
        return maxL;
    }
    console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
    console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
    console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
    console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
    console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);