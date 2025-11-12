package AppSobrecarga;
import java.util.Scanner;

public class App {
    public static Scanner s = new Scanner(System.in);

    public static void main(String[] args) {
        exibeMenu();
    }

    public static void exibeMenu(){
        int opcao = 0;

        do{
            System.out.println("FIGURAS GEOMÉTRICAS");
            System.out.println("1 - Círculo");
            System.out.println("2 - Triângulo");
            System.out.println("3 - Quadrado");
            System.out.println("4 - SAIR");
            System.out.print("DIGITE A OPÇÃO: ");

            opcao = s.nextInt();

            while (opcao > 4 || opcao < 1) {
                System.out.println("Opção invalida, tente novamente");
                opcao = s.nextInt();
            }
        
            switch (opcao) {
                case 1:
                    initCirculo();
                    break;

                case 2:
                    initTriangulo();
                    break;

                case 3:
                    initQuadrado();
                    break;

                case 4:
                    System.out.println("Programa finalizado, até mais!");
                    break;
            }
        } while (opcao != 4);
    }

    public static void initCirculo(){
        System.out.println("Digite o Raio: ");
        double raio = s.nextDouble();

        System.out.println("Digite o X do centro: ");
        double xcentro = s.nextDouble();

        System.out.println("Digite o Y do centro: ");
        double ycentro = s.nextDouble();

        Circulo circulo = new Circulo(raio, xcentro, ycentro);

        circulo.exibe();
    }

    public static void initTriangulo(){
        System.out.println("Digite a base: ");
        double base = s.nextDouble();

        System.out.println("Digite a altura: ");
        double altura = s.nextDouble();

        Triangulo triagulo = new Triangulo(base, altura);

        triagulo.exibe();
    }
    
    public static void initQuadrado(){
        System.out.println("Digite o lado: ");
        double lado = s.nextDouble();

        Quadrado quadrado = new Quadrado(lado);

        quadrado.exibe();
    }
}
