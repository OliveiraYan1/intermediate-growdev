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

    public reply(tweet: Tweet): void{
        this._replies.push(tweet)
    }

    public like(like: Like): void{
        this._likes.push(like)
    }

    public show(): void{
        const replies: Tweet[] = this._replies;
        const replyFormatted:string[] = replies.map((reply) => `     > @${reply._fromUser.getUsername}: ${reply._content} \n`)
        const tweetContentFormatted: string = 
        `
        [${this.showLikes()}] \n
        ${replyFormatted} 
        ------------------------------------------------------------
        `;
        console.log (tweetContentFormatted);
    }

    public showReplies(): void{
        const replies = this._replies;
        const tweetContentFormatted = `@${this._fromUser.getUsername}: ${this._content}`
        const replyFormatted = replies.map((reply) => `    > @${reply._fromUser.getUsername}: ${reply._content} \n`)

        console.log(`${tweetContentFormatted}\n ${replyFormatted}`)
    }

    public showLikes(): void {
        const likes: Like[] = this._likes;
        if (likes.length === 0) {
            console.log(`
                @${this._fromUser.getUsername}: ${this._content} \n
                []
                `)
        }
        if (likes.length === 1) {
            console.log(`@${this._fromUser.getUsername}: ${this._content} \n [@<${likes[0].getUser.getUsername}> curtiu.]`)
        } 
        if (likes.length > 1) {
            console.log(`
            @${this._fromUser.getUsername}: ${this._content} \n
              [@<${likes[0].getUser.getUsername}> e mais ${likes.length - 1} usuários curtiram
            `
            )
        }
    }

    public get getUser(): User {
        return this._fromUser
    }

    public get getReplies(): Tweet[]{
        return this._replies;
    }

    public get getContent(): string {
        return this._content;
    }

    public get getType(): string {
        return this._type;
    }
}