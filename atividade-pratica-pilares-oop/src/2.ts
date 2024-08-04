/* Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto. */

class Imovel {
    endereco: string;
    preco: number;

    constructor (endereco: string, preco: number){
        this.endereco = endereco;
        this.preco = preco;
    }
}

class Novo extends Imovel {
    valorAdicionalNovo: number;

    constructor(endereco: string, preco: number, valorAdicionalNovo: number){
        super(endereco, preco);
        this.valorAdicionalNovo = valorAdicionalNovo;
    }

    public get valorAdicional(): void {
        return console.log(`O valor adicional do apartamento novo é ${this.valorAdicionalNovo}`)
    }
}

class Velho extends Imovel {
    desconto: number;

    constructor(endereco: string, preco: number, desconto: number){
        super(endereco, preco);
        this.desconto = desconto;
    }

    public get obterDesconto(): void {
        return console.log(`O valor adicional do apartamento novo é ${this.desconto}`)
    }
}

