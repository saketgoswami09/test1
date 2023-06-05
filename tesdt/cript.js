function moveZeroes(nums) {
    
    let nextNonZeroIndex = 0;
  
    
    for (let i = 0; i < nums.length; i++) {
      
      if (nums[i] !== 0) {
        const temp = nums[nextNonZeroIndex];
        nums[nextNonZeroIndex] = nums[i];
        nums[i] = temp;
        nextNonZeroIndex++;
      }
    }
  }
  