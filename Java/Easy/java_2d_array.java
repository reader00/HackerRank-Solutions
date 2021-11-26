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



public class Solution {
    public static void main(String[] args) throws IOException {
        int top, center, bottom, sum;
        int max = Integer.MIN_VALUE;
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, 6).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        
        for(int i = 0; i <= arr.size()-3; i++){
            for(int j = 0; j <= arr.size()-3; j++){
                top = arr.get(i).get(j) + arr.get(i).get(j+1) + arr.get(i).get(j+2);
                center = arr.get(i+1).get(j+1);
                bottom = arr.get(i+2).get(j) + arr.get(i+2).get(j+1) + arr.get(i+2).get(j+2);
                sum = top + center + bottom;
                if(max < sum){
                    max = sum;
                }
            }
        }
        System.out.println(max);
    }
}
