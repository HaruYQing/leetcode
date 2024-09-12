const nums = [3, 3];
const target = 6;

// hashmap：把 element 和 target 的 "差" 放入 object，後續看看有沒有 element 符合這些 "差"
const twoSum = (nums, target) => {
  let checked = {}; // 放在函數裡面，確保每次調用時是清空的
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (diff in checked) {
      return [checked[diff], i];
    } else {
      checked[nums[i]] = i;
    }
  }
};

// 暴力解法：抓出一個 num 讓他一一和他以後的數字相加
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
let result = twoSum(nums, target);
console.log(result);
