/* Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional. */

class Ingresso {
    valor: number
    
    constructor (valor: number) {
        this.valor = valor;
    }

    public imprimeValor(): void{
        return console.log(`O valor do ingresso é R$ ${this.valor}`)
    }
}

class Normal extends Ingresso {
    constructor(valor: number){
        super(valor)
    }   
}

class Vip extends Ingresso {
    valorAdicional: number

    constructor(valor:number, valorAdicional: number){
        super(valor)
        this.valorAdicional = valorAdicional;
    }

    public imprimeValor(): void {
        const valorVip = this.valor+this.valorAdicional;
        return console.log(`O valor do ingresso vip é R$ ${valorVip}`)
    }
}

class Camarote extends Ingresso {
    valorAdicionalCamarote: number

    constructor(valor:number, valorAdicional: number){
        super(valor)
        this.valorAdicionalCamarote = valorAdicional;
    }

    public imprimeValor(): void {
        const valorVip = this.valor + this.valorAdicionalCamarote;
        return console.log(`O valor do ingresso vip é R$ ${valorVip}`)
    }
}