public class GeradorExtratos {

    public String exibeExtrato(Conta conta) {
        return "Saldo: R$ " + conta.getSaldo();
    }
}