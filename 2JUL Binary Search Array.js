/*
Given a sorted array of integers, find the index of a target value using a 
binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing 
a middle value and dividing the search interval in half. 
The initial interval includes the whole array. If the value of the target 
value is less than the middle value of the interval, then the next interval 
will be the lower half of the current interval. If the value of the target 
value is greater than the middle value, then the next interval will be the 
upper half. The search process repeats until the middle value is equal to 
the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array. 

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?
*/
function binarySearch(array, target ) {
    let minIndex = 0;
    let maxIndex = array.length-1;
   
 while(minIndex <= maxIndex){
   let sumNum = Math.floor((minIndex + maxIndex) /2);
   if (array[sumNum] === target){
       return sumNum;
   } else if (array[sumNum] < target){
       minIndex = sumNum + 1;
   } else maxIndex = sumNum -1;
 }
 return -1;
}
console.log(`Test1: expected ${binarySearch([5], 4)} to be -1`);
console.log(`Test2: expected ${binarySearch([11, 12, 13, 14, 15], 11)} to be 0`);
console.log(`Test3: expected ${binarySearch([11, 12, 13, 14, 15], 12)} to be 1`);
console.log(`Test4: expected ${binarySearch([11, 12, 13, 14, 15], 13)} to be 2`);
console.log(`Test5: expected ${binarySearch([11, 12, 13, 14, 15], 14)} to be 3`);
console.log(`Test6: expected ${binarySearch([11, 12, 13, 14, 15], 15)} to be 4`);
console.log(`Test7: expected ${binarySearch([11, 12, 13, 14, 15], 16)} to be -1`);