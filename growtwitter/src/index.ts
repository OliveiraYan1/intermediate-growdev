import { Like } from "./Like";
import { Tweet } from "./Tweet";
import { User } from "./User";

const user1 = new User ("Yan Oliveira", "oliveirayan3", "oliveirayan4@gmail.com", "ASHioj@IODJSA");
const user2 = new User ("Ronaldinho Gaucho", "bruxo", "r10_bruxo@gmail.com", "ASHiojasd@IODJSA");
const user3 = new User ("Anderson", "rei do front", "ander_reidoCSS@gmail.com", "ASHiojadasdsd@IODJSA");

const tweet1 = new Tweet ("Vamos testar nossa aplicação", "normal", user1)
user1.sendTweet(tweet1)
const tweet2 = new Tweet ("Bom dia Brasil", "normal", user2)
user2.sendTweet(tweet2)
const tweet3 = new Tweet ("Bom dia galera", "normal", user3)
user3.sendTweet(tweet3)

const reply1 = new Tweet ("Bom dia meu amigo", "reply", user1)
tweet2.reply(reply1)

const reply2 = new Tweet ("Fala R10, bom dia meu amigão", "reply", user3)
tweet2.reply(reply2)

const reply3 = new Tweet ("Precisando estilizar umas páginas aqui do meu site rei do front", "reply", user2)
tweet3.reply(reply3)

const like1 = new Like(user3, reply3)
reply3.like(like1);

const like2 = new Like (user1, tweet3)
tweet3.like(like2)

const like3 = new Like (user2, tweet3)
tweet3.like(like3)

user2.follow(user1)
user2.follow(user3)
user1.follow(user2)
user3.follow(user2)

tweet3.show()


