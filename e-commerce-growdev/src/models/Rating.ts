import { Base } from "./Base";
import { Product } from "./Product";
import { User } from "./User";

export type Trating = 0 | 1 | 2 | 3 | 4 | 5;


export class Rating extends Base {
 
    public rate: Trating;
    private _product: Product;
    private _fromUser: User;

    constructor (rate: Trating, product: Product, user: User) {
        super()
        this.rate = rate;
        this._product = product;
        this._fromUser = user;
    }

    public get getProduct(): Product {
        return this._product
    }
}