import java.io.*;
import java.util.*;

public class Solution {

    static final Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        int q, x, y;
        String cmd;
        
        int n = in.nextInt();
        ArrayList<Integer> arr = new ArrayList<Integer>();
        
        for(int i = 0; i < n; i++){
            arr.add(in.nextInt());
        }
        
        q = in.nextInt();
        in.nextLine();
        
        for(int i = 0; i < q; i++){
            cmd = in.nextLine();
            x = in.nextInt();
            if(cmd.equals("Insert")){
                y = in.nextInt();
                arr.add(x, y);
            }else{
                arr.remove(x);
            }
            if(i != q-1){
                in.nextLine();
            }
        }
        for(int i = 0; i < arr.size(); i++){
            System.out.print(arr.get(i) + " ");
        }
    }
}