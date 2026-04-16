public class ContaCorrente implements Conta {
    private double saldo;
    private double taxa;

    public ContaCorrente() {
        this.saldo = 0;
        this.taxa = 2.5;
    }

    @Override
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Deposito realizado.");
        } else {
            System.out.println("Valor invalido.");
        }
    }

    @Override
    public void sacar(double valor) {
        if (valor > 0) {
            double totalSaque = valor + taxa;

            if (saldo >= totalSaque) {
                saldo -= totalSaque;
                System.out.println("Saque realizado.");
                System.out.println("Taxa: R$ " + taxa);
            } else {
                System.out.println("Saldo insuficiente.");
            }
        } else {
            System.out.println("Valor invalido.");
        }
    }

    @Override
    public double getSaldo() {
        return saldo;
    }
}