package gabrielManzi_TipoGenerico.gabrielManzi_TipoGenerico;

public class Vetor<T> {

    private T[] vet;
    private int tamanho;
    private int contador;

    @SuppressWarnings("unchecked")
    public Vetor(int tamanho) {
        this.tamanho = tamanho;
        this.contador = 0;
        this.vet = (T[]) new Object[tamanho];
    }

    public void adicionar(T elemento) {
        if (contador < tamanho) {
            vet[contador] = elemento;
            contador++;
        }
    }

    public T get(int indice) {
        if (indice >= 0 && indice < contador) {
            return vet[indice];
        }
        return null;
    }

    public int getContador() {
        return contador;
    }

    public int getTamanho() {
        return tamanho;
    }
}
