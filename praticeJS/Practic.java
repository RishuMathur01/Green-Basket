class Solution {
    public int[] twoSum(int[] nums, int target) {

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) { // start from i+1 to avoid duplicate pairs
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j }; // need 'new int[]' here
                }
            }
        }

        // If no solution is found (though problem guarantees one)
        throw new IllegalArgumentException("No two sum solution");
    }
}
