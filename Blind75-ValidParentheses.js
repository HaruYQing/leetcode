let s = "[";

// const pairs = {
//   "(": ")",
//   "[": "]",
//   "{": "}",
// };

// const isValid = (s) => {
//   if (s.length % 2 !== 0) return false;
//   if (
//     s[s.length - 1] === "(" ||
//     s[s.length - 1] === "[" ||
//     s[s.length - 1] === "{"
//   )
//     return false;
//   if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;

//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       stack.push(s[i]);
//     } else if (stack.length === 0 || pairs[stack.pop()] !== s[i]) {
//       return false;
//     }
//   }

//   return stack.length === 0;
// };

const isValid = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false; // 檢查 stack 是否為空

      switch (s[i]) {
        case ")":
          if (stack[stack.length - 1] === "(") {
            stack.pop();
          } else {
            return false;
          }
          break;

        case "]":
          if (stack[stack.length - 1] === "[") {
            stack.pop();
          } else {
            return false;
          }
          break;

        case "}":
          if (stack[stack.length - 1] === "{") {
            stack.pop();
          } else {
            return false;
          }
          break;
      }
    }
  }
  return stack.length === 0;
};

let ans = isValid(s);
console.log(ans);
