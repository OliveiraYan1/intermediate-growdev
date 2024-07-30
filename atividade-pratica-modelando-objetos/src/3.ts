/* Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */

class Conta {
    private numeroDaConta: number;
    private nomeDoCorrentista: string;
    private saldo: number;

    constructor (numeroDaConta: number, nomeCorrentista: string, saldo?:number){
        this.numeroDaConta = numeroDaConta;
        if(!saldo || saldo < 0){
            this.saldo = 0
        } else {
            this.saldo = saldo;
        }
        this.nomeDoCorrentista = nomeCorrentista;
    }

    private alterarNome (novoNome: string) {
        this.nomeDoCorrentista = novoNome;
    }

    public deposito (valor: number){
        if(this.saldo + valor > 0){
            this.saldo += valor;
        } else {
            return
        }
    }
    
    private saque (valor: number){
        if (this.saldo - valor > 0){
            this.saldo -= valor;
        }
    }
}
