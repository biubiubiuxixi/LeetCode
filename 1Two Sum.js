/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let index=map.get(target-nums[i]);
        if(index!=undefined){
            return [index,i];
        }
        map.set(nums[i],i);
    }
};