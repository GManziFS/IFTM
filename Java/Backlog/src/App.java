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
        
		System.out.println("""
			⁞________________________________________⁞
			⁞Selecione uma opção:                    ⁞
	    	⁞[1] incluir jogo/avaliação              ⁞
	    	⁞[2] consultar lista de jogos            ⁞
	    	⁞[3] consultar detalhes da avaliação     ⁞
	    	⁞[4] Excluir um jogo/avaliação           ⁞
	    	⁞[5] sair                                ⁞
	    	⁞________________________________________⁞
			""";);
		
	    
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

			case 2:
				

			case 5:
				break;
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