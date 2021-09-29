const myInfo = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
   text: (`Hello, I'm ${myInfo.name} from ${myInfo.campus} campus ! `)
}));