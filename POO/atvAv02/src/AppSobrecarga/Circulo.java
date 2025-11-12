package AppSobrecarga;

public class Circulo {
    private double raio;
    private double xcentro;
    private double ycentro;

    public Circulo (double raio, double xcentro, double ycentro){
        this.raio = raio;
        this.xcentro = xcentro;
        this.ycentro = ycentro;
    }

    public Circulo (double xcentro, double ycentro){
        raio = 0;
        this.xcentro = xcentro;
        this.ycentro = ycentro;
    }

    public double area(){
        return Math.PI * (this.raio * this.raio);
    }

    public double area(double r){
        return Math.PI * (r * r);
    }

    public void exibe(){
        System.out.printf("A area do circulo de centro (%.2f, %.2f) e de raio = %.2f vale %.2f", this.xcentro, this.ycentro, raio, area());
    }
}
