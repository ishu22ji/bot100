const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
    console.log('Usage : node reconnector.js <host> <port> [<name>]')
    process.exit(1)
}
function createBot () {
    const bot = mineflayer.createBot({
        host: process.argv[2],
        port: parseInt(process.argv[3]),
        username: process.argv[4] ? process.argv[4] : 'hello',
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