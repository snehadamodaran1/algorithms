var productExceptSelf = function (nums) {
  const result = [];

  let productSoFar = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar; 
    productSoFar *= nums[i];
  }
console.log(result)
  
  productSoFar = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  console.log(result)
  return result;
};
var nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
