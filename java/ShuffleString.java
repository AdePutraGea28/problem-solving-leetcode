class ShuffleString {
    public static void main(String[] args){
        ShuffleString tester = new ShuffleString();
        
        int[] arr = {4,5,6,7,0,2,1,3};
        System.out.println(tester.restoreString("codeleet", arr));
    }

    public String restoreString(String s, int[] indices) {

        char[] arr = new char[s.length()];

        for(int i = 0; i < indices.length ; i++) {
            arr[indices[i]] = s.charAt(i);
        }

        return String.valueOf(arr);
    }
}