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
        if (tweet.getType === "normal"){
            dbTweets.push(tweet);
        } else {
            console.log("Este tweet não possui o tipo correto")
        }
    };

    public follow(user: User): void {
        if (user === this){
            console.log ("Você não pode seguir a si mesmo");
        } else {
            user._followers.push(this);
        }
    };

    public showFeed(): void {
        this.showTweets();
        for (let i = 0; i < this._followers.length; i++){
            console.log (this._followers[i].showTweets())
        }

    }

    public showTweets(): void {
        const usersTweet = dbTweets.filter ((tweets) => (tweets.getUser) === this);
        for (let i = 0; i < dbTweets.length; i++) {
           console.log (dbTweets[i].show());
        }
    }

    public get getUsername(): string {
        return this._username;
    }
}

