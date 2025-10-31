
// Estrutura rígida com construtor e tipos definidos.

class Pessoa {
    String nome;
    int idade;

    Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    void exibir() {
        System.out.println(nome + " tem " + idade + " anos.");
    }
}

public class Java_Cenario4 {
    public static void main(String[] args) {
        Pessoa p = new Pessoa("João", 20);
        p.exibir();
    }
}
