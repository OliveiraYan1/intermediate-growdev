/* 2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */

class Bola {
    public cor: string;
    public circunferencia: number;
    public material: string;

    constructor (cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material
    }

    public trocarCor (novaCor: string){
        this.cor = novaCor;
    }

    public mostrarCor (){
        console.log(this.cor);
    }
}

const bolaNike = new Bola("azul", 3, "borracha");
bolaNike.mostrarCor();
bolaNike.trocarCor("Roxo");
bolaNike.mostrarCor();