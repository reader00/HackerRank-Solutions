import java.io.*;
import java.util.*;

public class Solution {
    
    static final Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        int l, c, cc, max, min;
        String s, largest, smallest;
        
        s = in.nextLine();
        l = in.nextInt();
        
        max = (int) s.charAt(0);
        min = (int) s.charAt(0);
        
        largest = s.substring(0, l);
        smallest = s.substring(0, l);
        
        for(int i = 0; i < s.length()-l+1; i++){
            c = (int) s.charAt(i);
            if(c == min){
                for(int j = 0; j < l; j++){
                    c = (int) s.charAt(i+j);
                    cc = (int) smallest.charAt(j);
                    if(c < cc){
                        smallest = s.substring(i, i+l);
                        break;
                    }else if(c > cc){
                        break;
                    }
                }
            }else if(c < min){
                min = c;
                smallest = s.substring(i, i+l);
            }
            
            if(c == max){
                for(int j = 0; j < l; j++){
                    c = (int) s.charAt(i+j);
                    cc = (int) largest.charAt(j);
                    if(c > cc){
                        largest = s.substring(i, i+l);
                        break;
                    }else if(c < cc){
                        break;
                    }
                }
            }else if(c > max){
                max = c;
                largest = s.substring(i, i+l);
            }
        }
        
        System.out.println(smallest + "\n" + largest);
    }
}