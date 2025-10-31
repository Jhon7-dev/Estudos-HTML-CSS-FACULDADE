// CENÁRIO 5 – Execução paralela com Threads em Java

class MinhaThread extends Thread {
    public void run() {
        System.out.println("Executando tarefa em paralelo...");
    }
}

public class Java_Cenario5 {
    public static void main(String[] args) {
        MinhaThread t = new MinhaThread();
        t.start(); // executa em outra thread
        System.out.println("Tarefa principal continua...");
    }
}
