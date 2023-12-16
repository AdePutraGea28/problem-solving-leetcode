public class RemoveElement {
    public static void main(String[] args) {
        // https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
        int[] nums = {3,2,2,3};
        int val = 3;
        SolutionRemoveElement solution = new SolutionRemoveElement();
        int result = solution.removeElement(nums, val);

        for(int i = 0; i < result; i++) {
            System.out.println(nums[i]);
        }

    }
}

class SolutionRemoveElement {
    public int removeElement(int[] nums, int val) {
        int len = nums.length;
        int count = 0;

        for(int i = 0, j = 0; i < len; i++) {
            if(nums[i] != val) {
                nums[j] = nums[i];
                j++;
                count++;
            }
        }
        
        return count;
    }
}
