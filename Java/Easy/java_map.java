import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Integer v;
        Scanner in = new Scanner(System.in);
        Map<String, Integer> phoneBook = new HashMap<String, Integer>();
        int n=in.nextInt();
        in.nextLine();
        for(int i=0;i<n;i++)
        {
            String name=in.nextLine();
            int phone=in.nextInt();
            in.nextLine();
            
            phoneBook.put(name, phone);
        }
        
        while(in.hasNext())
        {
            String s=in.nextLine();
            v = phoneBook.get(s);
            if(v == null){
                System.out.println("Not found");
            }else{
                System.out.println(s + "=" + v);
            }
        }
    }
}
