/* Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque. */

class Carro {
    public consumo: number;
    public quantidadeCombustivel: number;

    constructor (consumo: number) {
        this.consumo = consumo;
        this.quantidadeCombustivel = 0;
    }

    public andar(quilometros:number) {
        const quantidadeGastaCombustivel: number = quilometros / this.consumo;
        if (quantidadeGastaCombustivel < this.quantidadeCombustivel){
            console.log ("Não há combustível suficiente. Por favor abasteça!")
            return
        }

        this.quantidadeCombustivel -= quantidadeGastaCombustivel;
    }

    public obterGasolina(){
        console.log(`A quantidade de gasonlina é ${this.quantidadeCombustivel}`)
    }

    public adicionarGasolina (valorAbastecimento: number){
        this.quantidadeCombustivel += valorAbastecimento;
    }

}