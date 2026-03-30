public class Funcionario {

    private String nome;
    private int horasTrabalhadas;
    private double valorHora;

    private static final double SALARIO_MINIMO = 1518.00;
    private static final double SALARIO_MAXIMO = 10000.00;

    private static final int HORAS_MIN = 20;
    private static final int HORAS_MAX = 160;

    private static final double VALOR_HORA_MIN = SALARIO_MINIMO * 0.01;
    private static final double VALOR_HORA_MAX = SALARIO_MINIMO * 0.10;

    // GETTERS e SETTERS

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio.");
        }
        this.nome = nome;
    }

    public int getHorasTrabalhadas() {
        return horasTrabalhadas;
    }

    public void setHorasTrabalhadas(int horasTrabalhadas) {
        if (horasTrabalhadas < HORAS_MIN || horasTrabalhadas > HORAS_MAX) {
            throw new IllegalArgumentException("Horas devem estar entre 20 e 160.");
        }
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public double getValorHora() {
        return valorHora;
    }

    public void setValorHora(double valorHora) {
        if (valorHora < VALOR_HORA_MIN || valorHora > VALOR_HORA_MAX) {
            throw new IllegalArgumentException("Valor por hora inválido.");
        }
        this.valorHora = valorHora;
    }

    // MÉTODO PRINCIPAL

    public double calcularPagamento() {
        double pagamento = horasTrabalhadas * valorHora;

        if (pagamento < SALARIO_MINIMO) {
            throw new IllegalArgumentException("Pagamento abaixo do salário mínimo.");
        }

        if (pagamento > SALARIO_MAXIMO) {
            throw new IllegalArgumentException("Pagamento acima do teto permitido.");
        }

        return pagamento;
    }
}