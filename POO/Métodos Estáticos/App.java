//Professor voce vai ver só 1 commit pois eu estava fazendo no meu almoço do trabalho no onlineGDB e passei para o VSCode em casa, porque no trabalho eles não habilitam Java baixado nas maquinas

import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        int[] lados = lerLados();

        boolean eTriangulo = ValidaTriangulo.ehTriangulo(lados[0], lados[1], lados[2]);

        if (eTriangulo) {
            Triangulo triangulo = new Triangulo(lados[0], lados[1], lados[2]);
            mostrarTipo(triangulo);
        } else {
            System.out.println("Esses valores não formam um triângulo válido!");
        }
    }

    public static int[] lerLados() {
        Scanner entrada = new Scanner(System.in);
        int[] lados = new int[3];
        String[] ordens = {"primeiro", "segundo", "terceiro"};

        for (int i = 0; i < lados.length; i++) {
            System.out.print("Digite o " + ordens[i] + " lado: ");
            lados[i] = entrada.nextInt();
        }

        return lados;
    }

    public static void mostrarTipo(Triangulo triangulo) {
        String tipo = triangulo.tipoTriangulo();
        System.out.println("Tipo do triângulo: " + tipo);
    }
}
