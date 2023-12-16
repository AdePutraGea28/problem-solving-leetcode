public class RemoveDuplicatesfromSortedArray {
    public static void main(String[] args) {

        // https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        SolutionRemoveDuplicatesfromSortedArray solution = new SolutionRemoveDuplicatesfromSortedArray();

        int result = solution.removeDuplicates(nums);

        for(int i = 0; i < result; i++) {
            System.out.println(nums[i]);
        }

    }
}

class SolutionRemoveDuplicatesfromSortedArray {
    public int removeDuplicates(int[] nums) {
        int len = nums.length;
        int pointer1 = 0;
        int pointer2 = 1;

        while(pointer2 < len) {
            if(nums[pointer1] == nums[pointer2]){
                // pointer1++;
                pointer2++;   
            }
            else {
                pointer1++;
                nums[pointer1] = nums[pointer2];
                pointer2++;
            }
        }

        return pointer1 + 1;
    }
    
}
