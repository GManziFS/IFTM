import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        int [] num1 = {4,8,5,16,32,21,64,128,62,80, 90};
        int [] num2 = {2,0,4,8,0,2,4};

        for(int i=0; i<num1.length; i++){
            try{
                if (num1[i] % num2[i] != 0) {
                    throw new DivisaoNaoExata(num1[i], num2[i]);
                }
                System.out.println(num1[i] + "/" + num2[i] + "=" + (num1[i]/num2[i]));
            }catch(ArithmeticException | ArrayIndexOutOfBoundsException e){
                System.out.println(e.getMessage());
            }catch(DivisaoNaoExata e){
                System.out.println(e.toString());
            }
        }
    }
}
