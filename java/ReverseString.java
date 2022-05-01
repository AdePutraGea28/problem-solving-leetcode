class ReverseString{
    public static void main(String[] args) {

        char[] x = {'h','e', 'l','l','o',};
        reverseString(x);
    }

    static void reverseString(char[] s) {
        
        int leftIndex = 0;
        int rightIndex = s.length - 1;

        while(leftIndex < rightIndex) {
            char temp = s[leftIndex];
            s[leftIndex] = s[rightIndex];
            s[rightIndex] = temp;

            leftIndex++;
            rightIndex--;
        }

        System.out.println(s);
    }
}