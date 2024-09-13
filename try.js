let s = "({[)";

let stack = [];

stack.push(s[0]);
stack.push(s[1]);
stack.push(s[2]);
stack.splice(stack.indexOf(s[0]));

console.log(stack);
