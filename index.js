const mineflayer = require('mineflayer')

function createBot () {
    const bot = mineflayer.createBot({
        host: "ishuserver.aternos.me",
        port: 59723,
        username: 'hello',
    })
    bot.on('error', (err) => console.log(err))
    bot.on('end', () => setTimeout(createBot, 10000))
  
    function login() {
      bot.chat("/login qwer")
      bot.chat("/tp hello -337 69 -354")
      bot.chat("hlo ishu")
    }
  
    bot.once('spawn', login)
}
createBot()
