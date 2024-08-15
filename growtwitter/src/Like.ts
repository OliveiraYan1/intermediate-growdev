import { Base } from "./Base";
import { Tweet } from "./Tweet";
import { User } from "./User";

export class Like extends Base {
    private _fromUser: User;
    private _toTweet: Tweet;

    constructor(fromUser: User, toTweet: Tweet){
        super()
        this._fromUser = fromUser;
        this._toTweet = toTweet;
    }
}

