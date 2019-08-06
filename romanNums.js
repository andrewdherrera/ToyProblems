/*
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
VI = 6 (5 + 1 = 6)
LXX = 70 (50 + 10 + 10 = 70)
MCC = 1200 (1000 + 100 + 100 = 1200)

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
IV = 4 (5 – 1 = 4)
XC = 90 (100 – 10 = 90)
CM = 900 (1000 – 100 = 900)

You should return “null” on invalid input.

You can use this DIGIT_VALUES object to help you!
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
Examples: 
"LX" => 60
"IV" => 4
"horse" => "null"
"" => 0
*/

var convertRN = function(string) {
    var decimalNum = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var result = 0;
    
    
    for (let i = 0; i < decimalNum.length; i++) {
      //console.log(string);
      while (string.indexOf(romanNum[i]) === 0) {
        if (!string[i] == romanNum[i]) {
          return null;
        }
        result += decimalNum[i];
        string = string.replace(romanNum[i], '')
      }
    }
    return result;
}
console.log(convertRN('LX'));
console.log(convertRN('IV'));
console.log(convertRN('horse'));
console.log(convertRN(''));
console.log(convertRN('CCIX'));
console.log(convertRN('MMMCDXXIV'));
//console.log(convertRN(''));
