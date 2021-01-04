public class w11d2 {

    public static Boolean find(int[] arr, int val) {
        return _find(arr, val, 0, arr.length-1);
    }

    private static Boolean _find(int[] arr, int val, int st, int ed) {
        int mid = (st + ed) / 2;
        // System.out.println("The mid index is: " + mid);
        // System.out.println("The mid value is: " + arr[mid]);
        if(arr[mid] == val) {
            return true;
        } else if (st >= ed) {
            return false;
        } else if(val > arr[mid]) {
            return _find(arr, val, mid+1, ed);
        } else {
            return _find(arr, val, st, mid-1);
        }
    }

    public static void main(String[] args) {
        System.out.println(find(
            new int[]{1, 2, 4, 5, 6, 8, 10, 11, 12, 15, 18},
            18
        ));
    }

}