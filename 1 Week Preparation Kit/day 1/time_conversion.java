import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
    // Write your code here
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

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
