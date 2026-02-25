package gabrielManzi_TipoGenerico.gabrielManzi_TipoGenerico;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Quantas pessoas deseja cadastrar?");
        int qtdPessoas = sc.nextInt();
        sc.nextLine();

        Vetor<Pessoa> pessoas = new Vetor<>(qtdPessoas);

        for (int i = 0; i < qtdPessoas; i++) {

            System.out.println("Nome:");
            String nome = sc.nextLine();

            System.out.println("Sexo (M/F):");
            String sexo = sc.nextLine();

            System.out.println("Naturalidade:");
            String naturalidade = sc.nextLine();

            pessoas.adicionar(new Pessoa(nome, sexo, naturalidade));
        }

        System.out.println("Quantas cidades deseja cadastrar?");
        int qtdCidades = sc.nextInt();
        sc.nextLine();

        Vetor<Cidade> cidades = new Vetor<>(qtdCidades);

        for (int i = 0; i < qtdCidades; i++) {

            System.out.println("Nome da cidade:");
            String nome = sc.nextLine();

            System.out.println("Adjetivo:");
            String adjetivo = sc.nextLine();

            System.out.println("Estado:");
            String estado = sc.nextLine();

            cidades.adicionar(new Cidade(nome, adjetivo, estado));
        }

        System.out.println("Digite o nome da pessoa:");
        String nomeBusca = sc.nextLine();

        Pessoa pessoaEncontrada = null;

        // Buscar pessoa
        for (int i = 0; i < pessoas.getContador(); i++) {
            if (pessoas.get(i).getNome().equalsIgnoreCase(nomeBusca)) {
                pessoaEncontrada = pessoas.get(i);
                break;
            }
        }

        if (pessoaEncontrada == null) {
            System.out.println(nomeBusca + " não encontrada.");
        } else {

            Cidade cidadeEncontrada = null;

            // Buscar cidade pela naturalidade
            for (int i = 0; i < cidades.getContador(); i++) {
                if (cidades.get(i).getNome()
                        .equalsIgnoreCase(pessoaEncontrada.getNaturalidade())) {

                    cidadeEncontrada = cidades.get(i);
                    break;
                }
            }

            if (cidadeEncontrada == null) {
                System.out.println(pessoaEncontrada.getNome()
                        + " nasceu em cidade desconhecida.");
            } else {

                String adjetivo = cidadeEncontrada.getAdjetivo();

                // Ajuste simples para feminino
                if (pessoaEncontrada.getSexo().equalsIgnoreCase("F")
                        && adjetivo.contains("/")) {
                    adjetivo = adjetivo.split("/")[1];
                } else if (adjetivo.contains("/")) {
                    adjetivo = adjetivo.split("/")[0];
                }

                System.out.println("O " + adjetivo + " "
                        + pessoaEncontrada.getNome()
                        + " nasceu em "
                        + cidadeEncontrada.getNome()
                        + " - "
                        + cidadeEncontrada.getEstado() + ".");
            }
        }

        sc.close();
    }
}
