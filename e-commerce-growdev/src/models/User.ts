import { Base } from "./Base";
import { Product } from "./Product";

export class User extends Base {
    public name: string;
    public username: string;
    public email: string;
    private _cart: Product[];

    constructor (name: string, username: string, email: string){
        super()
        this.name = name;
        this.username = username;
        this.email = email;
        this._cart = []
    }

    public addToCart (product: Product): void {
        this._cart.push(product)
    }

    public removeFromCart(product: Product): void {
        const indexProductToRemove = this._cart.findIndex((productToRemove) => {
            productToRemove === product
        })

        this._cart.slice(indexProductToRemove - 1, 1)
    }

    
    public showProducts(user: User): string {
        const usersProduct = user.getProducts;
        console.log (usersProduct)
        return ""
    }
    
    public get getProducts(): Product[] {
        return this._cart
    }
}