import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static final Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        String a = in.nextLine();
        String b = in.nextLine();
        
        BigInteger aa = new BigInteger(a);
        BigInteger bb = new BigInteger(b);
        
        System.out.println(aa.add(bb));
        System.out.println(aa.multiply(bb));
    }
}