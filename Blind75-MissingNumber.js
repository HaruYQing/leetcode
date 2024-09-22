let nums = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];

// const missingNumber = (nums) => {
//   const n = nums.length;
//   nums.sort(function (a, b) {
//     return a - b;
//   });
//   if (n === 1 && nums[0] === 0) {
//     return 1;
//   } else if (nums[0] > 0) {
//     return 0;
//   }
//   for (let i = 1; i < n; i++) {
//     if (nums[i] !== nums[i - 1] + 1) {
//       return nums[i] - 1;
//     } else if (nums[n - 1] === n - 1) {
//       return n;
//     }
//   }
// };

const missingNumber = (nums) => {
  let n = nums.length;
  let idealSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return idealSum - sum;
};

let output = missingNumber(nums);
console.log(output);
