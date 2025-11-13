import java.util.Scanner;

public class App {
    public static Scanner s = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        menu();
    }

    public static void menu() {
        int opcao = 0;

        do {
            System.out.println("FIGURA");
            System.out.println("1- Círculo");
            System.out.println("2- Triângulo");
            System.out.println("3- Quadrado");
            System.out.println("4- SAIR");
            System.out.println("DIGITE A OPÇÃO: __");

            opcao = s.nextInt();

            while (opcao > 4 || opcao < 1) {
                System.out.println("Opção invalida, tente novamente");
                opcao = s.nextInt();
            }

            if (opcao > 0 || opcao < 4) {
                FigurasGeometricas figura = le(opcao);
                subMenu(figura, opcao);
            }
        } while (opcao != 4);
    }

    public static FigurasGeometricas le(int opcao){
        FigurasGeometricas figura = new FigurasGeometricas(0);
        
        switch (opcao) {
            case 1://Circulo
                System.out.println("Digite o X do centro: ");
                double xc = s.nextDouble();
                System.out.println("Digite o Y do centro: ");
                double xy = s.nextDouble();
                System.out.println("Digite o raio: ");
                double raio = s.nextDouble();
                figura = new FigurasGeometricas(xc, xy, raio);
                break;
            case 2://Triangulo
                System.out.println("Digite a base: ");
                double base = s.nextDouble();
                System.out.println("Digite a altura: ");
                double altura = s.nextDouble();
                figura = new FigurasGeometricas(base, altura);
                break;
            case 3://Quadrado
                System.out.println("Digite o lado: ");
                double lado = s.nextDouble();
                figura = new FigurasGeometricas(lado);
                break;
        }

        return figura;
    }

    public static void subMenu(FigurasGeometricas figura, int opcao){
        int opcaoSub = 0;

        do {
            System.out.println("AÇÕES");
            System.out.println("1- Exibir Dados");
            System.out.println("2- Área");
            System.out.println("3- Voltar");
            System.out.println("DIGITE A OPÇÃO: __");

            opcaoSub = s.nextInt();

            while (opcaoSub > 3 || opcaoSub < 1) {
                System.out.println("Opção invalida, tente novamente");
                opcaoSub = s.nextInt();
            }

            switch (opcaoSub) {
                case 1:
                    switch (opcao) {
                        case 1:
                            System.out.println(figura.exibeCirculo());
                            break;
                        case 2:
                            System.out.println(figura.exibeTringulo());
                            break;
                        case 3:
                            System.out.println(figura.exibeQuadrado());
                            break;
                    }
                    break;
                case 2:
                    switch (opcao) {
                        case 1:
                            System.out.printf("A area do circulo é: %.2f/n", figura.areaCirculo());
                            break;
                        case 2:
                            System.out.printf("A area do triangulo é: %.2f/n", figura.areaTriangulo());
                            break;
                        case 3:
                            System.out.printf("A area do quadrado é: %.2f/n", figura.areaQuadrado());
                            break;
                    }
                    break;
                case 3:
                    menu();
                    break;
            }
        }while(opcao != 3);
    }
}
