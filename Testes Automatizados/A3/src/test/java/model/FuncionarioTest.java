import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FuncionarioTest {

    @Test
    void testarModificarHorasAbaixoLimiteInferiorGeraErro() {
        Funcionario f = new Funcionario();

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.setHorasTrabalhadas(10);
        });

        assertEquals("Horas devem estar entre 20 e 160.", ex.getMessage());
    }

    @Test
    void testarModificarHorasAcimaLimiteSuperiorGeraErro() {
        Funcionario f = new Funcionario();

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.setHorasTrabalhadas(200);
        });

        assertEquals("Horas devem estar entre 20 e 160.", ex.getMessage());
    }

    @Test
    void testarModificarHorasComValoresValidosProduzPagamentoEsperado() {
        Funcionario f = new Funcionario();
        f.setHorasTrabalhadas(100);
        f.setValorHora(20);

        double pagamento = f.calcularPagamento();

        assertEquals(2000.0, pagamento);
    }

    @Test
    void testarModificarValorPorHoraAbaixoLimiteGeraErro() {
        Funcionario f = new Funcionario();

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.setValorHora(10);
        });

        assertEquals("Valor por hora inválido.", ex.getMessage());
    }

    @Test
    void testarModificarValorPorHoraAcimaLimiteGeraErro() {
        Funcionario f = new Funcionario();

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.setValorHora(200);
        });

        assertEquals("Valor por hora inválido.", ex.getMessage());
    }

    @Test
    void testarPagamentoAbaixoSalarioMinimoGeraErro() {
        Funcionario f = new Funcionario();
        f.setHorasTrabalhadas(20);
        f.setValorHora(20);

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.calcularPagamento();
        });

        assertEquals("Pagamento abaixo do salário mínimo.", ex.getMessage());
    }

    @Test
    void testarPagamentoAcimaTetoGeraErro() {
        Funcionario f = new Funcionario();
        f.setHorasTrabalhadas(160);
        f.setValorHora(100);

        Exception ex = assertThrows(IllegalArgumentException.class, () -> {
            f.calcularPagamento();
        });

        assertEquals("Pagamento acima do teto permitido.", ex.getMessage());
    }
}