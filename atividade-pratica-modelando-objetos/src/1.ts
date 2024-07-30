/* Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */

class Contador {
    
    public valor: number;

    constructor () {
        this.valor = 0;
    }

    public zerarContador () {
        this.valor = 0;
    }

    public incrementarContador(incremento: number) {
        this.valor = incremento;
    }

    public retornarValor () {
        console.log(`Marcação do contador: ${this.valor}`)
    }
}

const cronometro = new Contador ();
cronometro.incrementarContador(3)
cronometro.retornarValor()
cronometro.zerarContador();
cronometro.retornarValor()