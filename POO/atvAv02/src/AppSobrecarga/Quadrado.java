package AppSobrecarga;

public class Quadrado {
    private double lado;

    public Quadrado(double lado){
         this.lado = lado;
    }

    public double area(){
        return this.lado * this.lado;
    }

    public void exibe(){
        System.out.printf("A área do quadrado de lado = %.2f vale %.2f", this.lado, area());
    } 
}
