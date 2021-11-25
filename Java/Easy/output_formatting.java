import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            System.out.println("================================");
            for(int i=0;i<3;i++){
                String s1=sc.next();
                int x=sc.nextInt();
                // String xx = x + "";
                System.out.println(String.format("%-15s", s1) + String.format("%03d", x));
                //Complete this line
            }
            System.out.println("================================");

    }
}



