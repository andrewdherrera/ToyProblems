// inputs: string 
// outputs: array of starting and ending index of longest run

function longestRun (string) {
    var length = string.length;
    if (length < 2){
        return length;
    }

    let longest = 0;
    let currentRun = 1;

    previousChar = string.charAt(0);
    for (let i = 0; i < length; ++i) {
        let currentChar = string.charAt(i);
        if(currentChar === previousChar){
            ++currentChar;
        } else {
            if (currentRun > longest) {
                longest = currentChar;
            }
            currentChar = 1;
        }
        previousChar = currentChar;
    }
    if (currentRun > longest) {
        longest = currentChar;
    }
    return ;
}
  
  console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
  console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
  console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
  console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
  console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
  console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);


