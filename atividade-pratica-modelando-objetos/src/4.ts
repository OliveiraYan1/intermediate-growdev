/* Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

class Calculadora {
    public historico: string[];

    constructor () {
        this.historico = [];
    }

    public somar (valor1: number, valor2: number){
        const soma = valor1+valor2;
        this.historico = [`${valor1} + ${valor2} = ${soma}`]
    }

    public multiplicar (valor1: number, valor2: number){
        const resultado = valor1*valor2;
        this.historico = [`${valor1} * ${valor2} = ${resultado}`]
    }

    public dividir (valor1: number, valor2: number){
        const resultado = valor1/valor2;
        this.historico = [`${valor1} * ${valor2} = ${resultado}`]
    }

    public subtrair (valor1: number, valor2: number){
        const resultado = valor1-valor2;
        this.historico = [`${valor1} * ${valor2} = ${resultado}`]
    }
}