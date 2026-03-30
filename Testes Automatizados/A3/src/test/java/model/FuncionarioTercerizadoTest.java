import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FuncionarioTerceirizadoTest {

    @Test
    void testarModificarDespesaAcimaLimiteGeraErro() {
        FuncionarioTerceirizado f = new FuncionarioTerceirizado();

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.setDespesasAdicionais(1500);
        });

        assertEquals("Despesa adicional não pode ultrapassar 1000.", ex.getMessage());
    }

    @Test
    void testarModificarDespesaGeraPagamentoValido() {
        FuncionarioTerceirizado f = new FuncionarioTerceirizado();

        f.setHorasTrabalhadas(100);
        f.setValorHora(20);
        f.setDespesasAdicionais(500);

        double pagamento = f.calcularPagamento();

        // 100*20 = 2000 + (500 * 1.1) = 550 → total = 2550
        assertEquals(2550.0, pagamento);
    }

    @Test
    void testarModificarDespesaGeraPagamentoAcimaLimiteSalario() {
        FuncionarioTerceirizado f = new FuncionarioTerceirizado();

        f.setHorasTrabalhadas(160);
        f.setValorHora(60);
        f.setDespesasAdicionais(1000);

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.calcularPagamento();
        });

        assertEquals("Pagamento acima do teto permitido.", ex.getMessage());
    }
}