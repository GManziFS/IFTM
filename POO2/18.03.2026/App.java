public class App {
    public static void main(String[] args) {

        GeometriaPlana plana = new GeometriaPlana();

        plana.mudaParaCirculo();
        System.out.println(plana.exibe());

        plana.mudaParaTriangulo();
        System.out.println(plana.exibe());

        plana.mudaParaQuadrado();
        System.out.println(plana.exibe());
    }
}