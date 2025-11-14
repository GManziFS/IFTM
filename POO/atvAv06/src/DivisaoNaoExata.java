public class DivisaoNaoExata extends Exception{
    private int num1;
    private int num2;

    public DivisaoNaoExata(int num1, int num2){
        super();
        this.num1 = num1;
        this.num2 = num2;
    }

    @Override
    public String toString(){
        return String.format("A divisão entre %d e %d não é inteira", num1, num2);
    }
}
