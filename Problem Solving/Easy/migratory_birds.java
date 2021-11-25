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

    // Complete the migratoryBirds function below.
    static int migratoryBirds(List<Integer> arr) {
        double big = 0;
        double temp = 0;
        int now;

        int[] bird = new int[arr.size()];
        List<Integer> most = new ArrayList<>();

        for(int i = 0; i < arr.size(); i++) bird[i] = arr.get(i);

        Arrays.sort(bird);
        now = bird[0];

        for(int i = 0; i < bird.length; i++){
            if(bird[i] == now){
                temp++;
                if(i == bird.length - 1){
                    if(temp > big){
                        most.clear();
                        most.add(now);
                        big = temp;
                    } else if(temp == big){
                        most.add(now);
                    }
                }
            }else{
                if(temp > big){
                    most.clear();
                    most.add(now);
                    big = temp;
                } else if(temp == big){
                    most.add(now);
                }
                temp = 1;
                now = bird[i];;
            }
        }
        Collections.sort(most);
        return most.get(0);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arrCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int result = migratoryBirds(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
