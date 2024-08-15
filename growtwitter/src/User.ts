import { Base } from "./Base";
import { dbTweets } from "./db/tweets";
import { Tweet } from "./Tweet";


export class User extends Base {
    private _name: string;
    private _username: string;
    private _email: string;
    private _password: string;
    private _followers: User[];

    constructor(name: string, username: string, email: string, password: string){
        super();
        this._name = name;
        this._username = username;
        this._email = email;
        this._password = password;
        this._followers = []
    }

    public sendTweet(tweet: Tweet): void{
        dbTweets.push(tweet);
    };

    //user1.follow(user2)

    public follow(user: User): void {
        if (user === this){
            console.log ("Você não pode seguir a si mesmo");
        } else {
            user._followers.push(this);
        }
    };
    public showFeed(): void {}
    public showTweets(): void {}

    public get getUsername(): string {
        return this._username;
    }
}

