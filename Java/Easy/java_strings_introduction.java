import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int lA, lB, cA, cB;
        String lex = "", sA, sB;
        String A=sc.next();
        String B=sc.next();
        /* Enter your code here. Print output to STDOUT. */
        
        lA = A.length();
        lB = B.length();
        for(int i = 0; i < lA; i++){
            cA = (int) A.toLowerCase().charAt(i);
            cB = (int) B.toLowerCase().charAt(i);
            if(cA > cB){
                lex = "Yes";
                break;
            }else if(cA <= cB){
                lex = "No";
                break;                
            }
        }
        sA = (A.charAt(0) + "").toUpperCase() + A.substring(1, lA);
        sB = (B.charAt(0) + "").toUpperCase() + B.substring(1, lB);
        
        System.out.println(lA +lB);
        System.out.println(lex);
        System.out.println(sA + " " + sB);
    }
}
