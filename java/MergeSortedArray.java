public class MergeSortedArray {
    public static void main(String[] args) {
        // https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
        int[] nums1 = {1,2,3,0,0,0};
        int[] nums2 = {2,5,6};
        int m = 3;
        int n = 3;

        Solution solution = new Solution();
        solution.merge(nums1, m, nums2, n);
        for(int x : nums1) {
            System.out.println(x);
        }
    }
}

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int pMerge = m + n - 1;
        
        while (p2 >= 0) {
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[pMerge--] = nums1[p1--];
            } else {
                nums1[pMerge--] = nums2[p2--];
            }
        }

    }
}
