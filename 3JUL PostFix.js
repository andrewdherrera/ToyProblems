/*Postfix notation (also known as Reverse Polish notation) is an alternative way of representing 
algebra expressions. For example, take the following expression:

2 + 5 * 8
This "normal" notation that we see everyday is called infix notation. Infix notation places 
its math operators in-between the numbers.

Infix notation also has order of operations. The previous example will be interpreted 
as 2 + (5 * 8), because multiplication comes before addition. This makes it difficult to 
write a program to parse infix expressions.

In contrast, postfix notation is much easier to parse, albeit it looks weird at first. Postfix 
notation places math operators after the numbers. For example, the previous infix example 
can be re-written in postfix notation like this:

2 5 8 * +
This expression should be read from left to right, one number / operator at a time. In doing so, 
you must keep a stack of numbers that wait to be operated on.

I attached a photo of an example that walks through this

Examples to test: 
"1 5 8 * +" // expected: 41
"1 5 8 + *" // expected: 13
"100 2 / 25 +" // expected: 75
*/

function calculate(inputs) {
// create var to put inputs which is a string and split to create single elements
inputs = inputs.split(' ');
console.log(inputs)
//holder var
let numbers = [];
//loop through elements of inputs 
for (let i of inputs) {
    //if its a NUMBER push to holder
    if (Number(i)) {
        numbers.push(i);
    }else {
        let popped1 = Number(numbers.pop());
        let popped2 = Number(numbers.pop());    
        let num = op(i, popped1, popped2);
        numbers.push(Number(num));
        console.log(inputs)
    }
}
return numbers.pop();
}
//created helper to test for the 4 basic operators
function op(operator, popped1, popped2) {
    console.log(operator)
    console.log(popped1)
    console.log(popped2)

  if (operator === '+'){
    return popped2 + popped1;
  }
  if (operator === '-'){
    return popped2 - popped1;
  }
  if (operator === '*'){
    return popped2 * popped1;
  }
  if (operator === '/'){
    return popped2 / popped1;
  }
}

console.log(`Test1: for input "1 5 8 * +", expected 41 and got ${calculate('1 5 8 * +')}`);
console.log(`Test2: for input "1 5 8 + *", expected 13 and got ${calculate('1 5 8 + *')}`);
console.log(`Test3: for input "100 2 / 25 +", expected 75 and got ${calculate('100 2 / 25 +')}`);
console.log(`Test4: for input ".5 .5 +", expected 1 and got ${calculate('.5 .5 +')}`);