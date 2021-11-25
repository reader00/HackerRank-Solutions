import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the plusMinus function below.
    static void plusMinus(int[] arr) {
        double positive = 0;
        double negative = 0;
        double zero = 0;
        String formatP, formatN, formatZ;
        DecimalFormat decimalFormat = new DecimalFormat("0.######");


        for(int i = 0; i < arr.length; i ++){
            if(arr[i] > 0){
                positive++;
            } else if(arr[i] < 0){
                negative++;
            } else{
                zero++;
            }
        }

        formatP = decimalFormat.format(positive / arr.length);
        formatN = decimalFormat.format(negative / arr.length);
        formatZ = decimalFormat.format(zero / arr.length);

        System.out.println(formatP);
        System.out.println(formatN);
        System.out.println(formatZ);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        plusMinus(arr);

        scanner.close();
    }
}
