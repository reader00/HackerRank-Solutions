import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the timeConversion function below.
     */
    static String timeConversion(String s) {
        String[] arr = s.split("");
        String result;
        String format = arr[arr.length - 2] + arr[arr.length - 1];
        String[] hourArr = new String[2];
        int hour = Integer.parseInt(arr[0] + arr[1]);

        if(format.equalsIgnoreCase("pm")){
            if(hour < 12){
                hour += 12;
                hourArr = ("" + hour).split("");
                arr[0] = hourArr[0];
                arr[1] = hourArr[1];
            }
        } else{
            if(hour >= 12){
                hour -= 12;
                DecimalFormat decimalFormat = new DecimalFormat("00");

                hourArr = decimalFormat.format(hour).split("");
                arr[0] = hourArr[0];
                arr[1] = hourArr[1];
            }
        }

        arr[arr.length - 2] = "";
        arr[arr.length - 1] = "";

        return String.join("", arr);
    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scan.nextLine();

        String result = timeConversion(s);

        bw.write(result);
        bw.newLine();

        bw.close();
    }
}
