package AppSobrecarga;

public class Triangulo {
    private double base;
    private double altura;

    public Triangulo(double base, double altura){
        this.base = base;
        this.altura = altura;
    }

    public double area(){
        return (this.base * this.altura)/2;
    }

    public void exibe(){
        System.out.printf("A area do triangulo de base = %.2f e de altura = %.2f vale %.2f", this.base, this.altura, area());
    } 
}
