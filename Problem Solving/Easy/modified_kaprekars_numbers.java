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
     * Complete the 'kaprekarNumbers' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER p
     *  2. INTEGER q
     */

    public static void kaprekarNumbers(int p, int q) {
        String result = "";
        for(int i = p; i <= q; i++){
            long power = (long) i*i;
            String s = power + "";
            int l = s.length();
            long a = power;
            long b = 0;
            if(l > 1){    
                a = Integer.parseInt(s.substring(0, l/2));
                b = Integer.parseInt(s.substring(l/2, l));
            }
            if(a+b == i){
                result += i + " ";
            }
        }
        System.out.println(result.equals("")? "INVALID RANGE" : result);
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int p = Integer.parseInt(bufferedReader.readLine().trim());

        int q = Integer.parseInt(bufferedReader.readLine().trim());

        Result.kaprekarNumbers(p, q);

        bufferedReader.close();
    }
}
