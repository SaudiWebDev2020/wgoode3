import java.util.ArrayList;

public class w11d1 {

    public static Boolean balancePoint(ArrayList<Integer> arr) {
        int lsum = 0;
        int rsum = 0;
        for(int value : arr) {
            rsum += value;
        }
        for(int i=0; i<arr.size(); i++) {
            lsum += arr.get(i);
            rsum -= arr.get(i);
            if(lsum == rsum) {
                return true;
            }
        }
        return false;
    }

    public static Double findAverage(ArrayList<Integer> arr) {
        Double sum = 0d;
        for(Integer value : arr) {
            sum += value;
        }
        return sum / arr.size();
    }

    public static void main(String[] args) {
        System.out.println("Hello World!");
        int[] arr = new int[]{3, 2, 1, 5, 3, -2};
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(3);
        nums.add(2);
        nums.add(1);
        nums.add(5);
        nums.add(3);
        nums.add(-1);
        System.out.println(nums);
        System.out.println(findAverage(nums));
        // Boolean result = balancePoint(nums);
        // System.out.println("The array is balanced? " + result);
    }

}

