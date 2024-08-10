import { Base } from "./Base";
import { User } from "./User";
import { Comment } from "./Comment";
import { commentsDb } from "../db/comments";
import { Rating, Trating } from "./Rating";
import { ratings } from "../db/ratings";

export class Product extends Base {
    public name: string;
    public value: number;

    constructor (name: string, value: number) {
        super()
        this.name = name;
        this.value = value;
    }

    public show(): string {
        const response: string = `Nome do produto: ${this.name} /n Preço: R$ ${this.value}`

        console.log (response)
        console.log("\n---------------------\n");
        
        this.showDetails();
        
        return response
    }

    private showDetails(): string {
        const productRating = ratings.filter((product) => {
            product.getProduct === this
        })
        
        const sum = productRating.reduce((prev, curr) => prev + curr.rate, 0)
        const average = sum/productRating.length;

        const productComments = commentsDb.filter ((comments) => {
            comments.getProduct === this
        })

        const commentsResponse = productComments.map((comments) => `${[comments.getUser.username]}: ${comments.content} \n`)
        
        const response = `
            Nome do produto: ${this.name}, Valor: R$ ${this.value} \n
            Avaliação média: ${average.toFixed(1)} \n
            ${commentsResponse}
        `
        console.log(response)
        return ""
    }

    public comment (content: string, user: User): void {
        const comment = new Comment (content, this, user)
        commentsDb.push(comment)
    }

    public rate (rate: Trating, user: User): void {
        const rate1 = new Rating(rate, this, user);
        ratings.push(rate1);
    }
}