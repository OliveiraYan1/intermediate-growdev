import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";

export type tTweet = "normal" | "reply";

export class Tweet extends Base {
    private _content: string;
    private _type: tTweet;
    private _likes: Like[];
    private _fromUser: User;
    private _replies: Tweet[];

    constructor(content: string, type: tTweet, fromUser: User){
        super();
        this._content = content;
        this._type = type;
        this._likes = [];
        this._fromUser = fromUser;
        this._replies = []
    }

    //tweet1.reply("cotneudo", "reply", user1)

    public reply(tweet: Tweet): void{
        this._replies.push(tweet)
    }


    //tweet1.like(user)
    public like(like: Like): void{
        this._likes.push(like)
    }

    public show(): void{}

    public showReplies(): void{
        const replies = this._replies;
        const tweetContentFormatted = `@${this._fromUser.getUsername}: ${this._content}`
        const replyFormatted = replies.map((reply) => `    > @${reply._fromUser.getUsername}: ${reply._content} \n`)

        console.log(`${tweetContentFormatted}\n ${replyFormatted}`)
    }


}