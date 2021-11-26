import java.io.*;
import java.util.*;
import java.util.HashMap;
import java.util.Map;

public class Solution {
    
    static boolean isAnagram(String a, String b) {
        // Complete the function
        Map<String, Integer> mapA = new HashMap<String, Integer>();
        Map<String, Integer> mapB = new HashMap<String, Integer>();
        if(a.length() != b.length()){
            return false;
        }
        for(int i = 0; i < a.length(); i++){
            String cA = (a.charAt(i) + "").toLowerCase();
            Integer vA = mapA.get(cA);
            if(vA == null){
                mapA.put(cA, 1);
            }else{
                mapA.put(cA, ++vA);
            }
            
            String cB = (b.charAt(i) + "").toLowerCase();
            Integer vB = mapB.get(cB);
            if(vB == null){
                mapB.put(cB, 1);
            }else{
                mapB.put(cB, ++vB);
            }
        }
        
        for (var e : mapA.entrySet()) {
            if(e.getValue() != mapB.get(e.getKey())){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
