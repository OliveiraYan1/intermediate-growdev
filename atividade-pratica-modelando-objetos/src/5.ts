/* Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel 

b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.*/

import { log } from "console";

class BombaCombustivel {
    public tipoCombustivel: string;
    public valorLitro: number;
    public quantidadeCombustivel: number;

    constructor (tipoCombustivel: string, valorLitro:number, quantidadeCombustivel: number){
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    public abastecerPorValor(valorAbastecimento:number) {
        const quantidadeDeLitros = (valorAbastecimento / this.valorLitro);

        if (quantidadeDeLitros > this.quantidadeCombustivel){
            console.log("Não há combustível suficiente")
            return
        }

        console.log(`O valor abastecido foi R$ ${valorAbastecimento} que corresponde a ${quantidadeDeLitros.toFixed(2)} litros`)
    }

    public abastecerPorLitros(quantidadeDeLitros:number) {
        if (quantidadeDeLitros > this.quantidadeCombustivel){
            console.log("Não há combustível suficiente");
            return;
        }

        const valorDoAbastecimento = (quantidadeDeLitros * this.valorLitro);
        console.log(`Foi abastecido ${quantidadeDeLitros} litros no valor de R$ ${valorDoAbastecimento.toFixed(2)}`);
    }

    private alterarValor (novoPreco: number){
        this.valorLitro = novoPreco;
    }

    private alterarCombustivel (novoCombustivel: string) {
        this.tipoCombustivel = novoCombustivel;
    }

    private alterarQuantidadeCombustivel (novaQuantidade: number){
        this.quantidadeCombustivel = novaQuantidade
    }
}