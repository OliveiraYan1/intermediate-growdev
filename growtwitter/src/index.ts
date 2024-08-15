import { Tweet } from "./Tweet";
import { User } from "./User";

const user1 = new User ("Yan Oliveira", "oliveirayan3", "oliveirayan4@gmail.com", "ASHioj@IODJSA")
const user2 = new User ("Ronaldinho Gaucho", "bruxo", "r10_bruxo@gmail.com", "ASHiojasd@IODJSA")

user2.follow(user1)

const tweet1 = new Tweet("Hello world", "normal", user1);
const tweet2 = new Tweet("Hello reply", "reply", user2);

//IMPLEMENTAR CHECAGEM SE O TWEET PERTENCE AO USUÁRIO
user1.sendTweet(tweet1)
tweet1.reply(tweet2)
tweet1.showReplies()
