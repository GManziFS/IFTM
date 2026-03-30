public class FuncionarioTerceirizado extends Funcionario {

    private double despesasAdicionais;
    private static final double DESPESA_MAX = 1000.00;

    public double getDespesasAdicionais() {
        return despesasAdicionais;
    }

    public void setDespesasAdicionais(double despesasAdicionais) {
        if (despesasAdicionais > DESPESA_MAX) {
            throw new IllegalArgumentException("Despesa adicional não pode ultrapassar 1000.");
        }
        this.despesasAdicionais = despesasAdicionais;
    }

    @Override
    public double calcularPagamento() {
        double pagamentoBase = super.calcularPagamento();
        double bonus = despesasAdicionais * 1.1;

        double pagamentoTotal = pagamentoBase + bonus;

        if (pagamentoTotal > 10000.00) {
            throw new IllegalArgumentException("Pagamento acima do teto permitido.");
        }

        return pagamentoTotal;
    }
}