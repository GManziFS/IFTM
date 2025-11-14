package atvAv05.src;

import java.util.Scanner;

public class App {
    public static int Senha = 1234;
    public static void main(String[] args) throws Exception{
        Scanner s = new Scanner(System.in);
        System.out.println("Bem vindo ao sistema financeiro!");
        while (true) {
            System.out.println("Digite sua senha:");
            int senha = s.nextInt();
            try{
                verificaSenha(senha);
                break;
            }catch(Exception e){
                System.out.println(e.getMessage());
            }
        }
    }

    public static void verificaSenha(int senha) throws Exception{
        if (senha != Senha) {
            throw new Exception("Senha invalida!");
        }
        System.out.println("Senha validada!");
        
    }
}
