public class FigurasGeometricas {
    private double lado;
    private double base;
    private double altura;
    private double xc;
    private double yc;
    private double raio;

    public FigurasGeometricas(double lado){
        this.lado = lado;
    }

    public FigurasGeometricas(double base, double altura){
        this.base = base;
        this.altura = altura;
    }

    public FigurasGeometricas(double xc, double yc, double raio){
        this.xc = xc;
        this.yc = yc;
        this.raio = raio;
    }

    public double areaQuadrado(){
        return this.lado * this.lado;
    }

    public double areaTriangulo(){
        return (this.base * this.altura)/2;
    }

    public double areaCirculo(){
        return Math.PI * (this.raio * this.raio);
    }

    public String exibeQuadrado(){
        return String.format("A área do quadrado de lado = %.2f vale %.2f", this.lado, areaQuadrado());
    }

    public String exibeTringulo(){
        return String.format("A área do triângulo de base = %.2f e de altura = %.2f vale %.2f", this.base, this.altura, areaTriangulo());
    }
    
    public String exibeCirculo(){
        return String.format("A área do círculo de centro (%.1f , %.1f) e de raio = %.2f vale %.2f", this.xc, this.yc, this.raio, areaCirculo());
    }
}
