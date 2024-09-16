/* You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
1 <= n <= 45 */

// 斐波那契數列
// 方法：1, 2, 3, 5, 8, 13, 21, ...,
// 階數：1, 2, 3, 4, 5,  6,  7, ..., (n-2), (n-1), n

const climbStairs = (n) => {
  if (n <= 3) {
    return n;
  } else {
    let result = 0;
    let a = 2,
      b = 3;
    for (let i = 4; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    return result;
  }
};

console.log(climbStairs(6));

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// const climbStairs = (n) => {
//   let twoStep = Math.floor(n / 2);
//   let result = 0;
//   for (let i = 0; i <= twoStep; i++) {
//     let m = n - i * 2;
//     result += factorial(m + i) / (factorial(m) * factorial(i));
//     console.log("result = ", result);
//   }
//   return result;
// };

// ans = climbStairs(3);
// console.log(ans);

// n 個 1 + 0 個 2 <<  0~m 個 2  >> m = Math.floor ( n / 2 ) 全部都是 2 (偶數)、只有一個 1 其他都是 2 (奇數)
// 0 個 2 ===> ( n - 2*0 )個 1 ===> 1種
// 1 個 2 ===> ( n - 2*1 )個 1 ===> 1 + ( n - 2*1 )種
// 2 個 2 ===> ( n - 2*2 )個 1 ===>
// ...
// m 個 2 ===> ( n - 2*m )個 1
/* 
n=11 m=5
0: 1step*11 + 2step*0 ===> (11+0)!/(11!*0!)
1: 1step*9 + 2step*1 ===> (9+1)!/(9!*1!)
2: 1step*7 + 2step*2 ===> (7+2)!/(7!*2!)
3: 1step*5 + 2step*3 ===> 
4: 1step*3 + 2step*4 ===>
5: 1step*1 + 2step*5 ===>

n=10 m=5
0: 1step*10 [1]
1: 1step*8 + 2step*1 ===> (8+1)!/(8!*1!)
2: 1step*6 + 2step*2 ===> (6+2)!/(6!*2!)
3: 1step*4 + 2step*3 ===> 
4: 1step*2 + 2step*4 ===>
5: 1step*0 + 2step*5 ===>
 */
