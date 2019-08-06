function isBalanced (str) {
    let stack = [];

    let open = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    };

    let close = {
      '}' : true,
      ']' : true,
      ')' : true
    };
    
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        console.log(char)
       if (open[char]){
           console.log(open[char])
           stack.push(char);
        } else if (close[char]){
            if (open[stack.pop()] != char)
            return false;
        }
    }
     return stack.length === 0;
  };
  
  console.log(`Test1: expected false and got ${isBalanced(')(')}`);
  console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
  console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
  console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
  console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
  console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
  console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
  console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
  console.log(`Test9: expected true and got ${isBalanced('{}')}`);
  console.log(`Test10: expected false and got ${isBalanced('{')}`);
  console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
  console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
  console.log(`Test13: expected false and got ${isBalanced('}')}`);
  console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
  console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
  console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);