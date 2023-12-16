import java.util.HashMap;
import java.util.Map;

public class RemoveDuplicatesfromSortedArrayII {
    public static void main(String[] args) {

        // https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
        int[] nums = {0,0,1,1,1,1,2,3,3};
        FirstSolutionRemoveDuplicatesfromSortedArrayII solution = new FirstSolutionRemoveDuplicatesfromSortedArrayII();

        int result = solution.removeDuplicates(nums);

        System.out.println("This below is the output result");
        for(int i = 0; i < result; i++) {
            System.out.print(nums[i] + " ");
        }

    }
}

class FirstSolutionRemoveDuplicatesfromSortedArrayII {
    public int removeDuplicates(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int pointer1 = 0;
        int len = nums.length;
        int maxNumDuplicate = 2;

        for(int i = 1; i < len; i++) {
            if(!map.containsKey(nums[i]) && nums[pointer1] == nums[i]){
                map.put(nums[i], 2);
                pointer1++;
                nums[pointer1] = nums[i];
            }
            if(nums[pointer1] != nums[i]) {
                pointer1++;
                nums[pointer1] = nums[i];
            }
        }

        return pointer1 + 1;
    }
}

class SecondSolutionRemoveDuplicatesfromSortedArrayII {
    public int removeDuplicates(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int pointer1 = 0;
        int len = nums.length;
        int maxNumDuplicate = 2;

        for(int i = 1; i < len; i++) {
            if(!map.containsKey(nums[i]) && nums[pointer1] == nums[i]){
                map.put(nums[i], 2);
                pointer1++;
                nums[pointer1] = nums[i];
            } else {
                // sudah 2 kali sama
                if(map.containsKey(nums[i]) && nums[pointer1] == nums[i] && map.get(nums[i]) == maxNumDuplicate) {
                    continue;
                }
                // jika berbeda dan 
                pointer1++;
                nums[pointer1] = nums[i];
            }
        }

        return pointer1 + 1;
    }

    // [0,0,1,1,2,3,]
    // [0,0,1,1,1,1,2,3,3]
    //  0,1,2,3,4,5,6,7,8

    // 0 1 2 3 3 3 4 5 6
    // 1 2 3 4 5 6 7 8 9
    //
}
