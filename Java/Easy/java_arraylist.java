import java.io.*;
import java.util.*;

public class Solution {

    static final Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        int n, d, v, q, x, y;
        ArrayList<Integer> temp;
        ArrayList<ArrayList<Integer>> arr = new ArrayList<ArrayList<Integer>>();
        
        n = in.nextInt();
        
        for(int i = 0; i < n; i++){
            temp = new ArrayList<Integer>();
            d = in.nextInt();
            for(int j = 0; j < d; j++){
                v = in.nextInt();
                temp.add(v);
            }
            arr.add(temp);
        }
        
        q = in.nextInt();
        
        for(int i = 0; i < q; i++){
            x = in.nextInt() - 1;
            y = in.nextInt() - 1;
            if(x < 0 || x >= arr.size()){
                System.out.println("ERROR!");
                continue;
            }
            temp = arr.get(x);
            
            if(y < 0 || y >= temp.size()){
                System.out.println("ERROR!");
                continue;
            }
            v = temp.get(y);
            System.out.println(v);
        }
    }
}