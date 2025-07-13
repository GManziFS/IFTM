import java.util.Scanner;

public class App {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
	    int contador;
	    
	    contador = 0;
	    String jogos[][] = new String[100][3];
	    int nota[] = new int[100];
        	    
	    System.out.println("Bem vindo ao seu backlog de jogos!");
	    System.out.println("Para começarmos:");
		menu(s, contador, jogos, nota);
	}

    public static void menu(Scanner s, int contador, String jogos[][], int nota[]) {
        int opcao;
        
	    System.out.println("⁞________________________________________⁞");
	    System.out.println("⁞Selecione uma opção:                    ⁞");
	    System.out.println("⁞[1] incluir jogo/avaliação              ⁞");
	    System.out.println("⁞[2] consultar lista de jogos            ⁞");
	    System.out.println("⁞[3] consultar detalhes da avaliação     ⁞");
	    System.out.println("⁞[4] Excluir um jogo/avaliação           ⁞");
	    System.out.println("⁞[5] sair                                ⁞");
	    System.out.println("⁞________________________________________⁞");
	    
	    opcao = s.nextInt();
		s.nextLine();
		while (opcao < 1 || opcao > 5){
		    System.out.println("Opção invalida, digite uma das opções informadas");
		    opcao = s.nextInt();
		    s.nextLine();
		} 
		
		selecao(s, opcao, contador, jogos, nota);
	}
	
    public static void selecao(Scanner s, int opcao, int contador, String jogos[][], int nota[]){
        switch(opcao){
            case 1:
                cadastro(s, contador, jogos, nota);
        }
    }
    
    public static void cadastro(Scanner s, int contador, String jogos[][], int nota[]){
        System.out.println("Favor informe em ordem: Nome do jogo | Descrição breve | Review | Nota (de 0 a 5)");
        
        for (int i = 0; i < 3; i++){
            jogos[contador][i] = s.nextLine();
        }  
        
        nota[contador] = s.nextInt();
        s.nextLine();

        contador++;

        menu(s, contador, jogos, nota);
    }
}