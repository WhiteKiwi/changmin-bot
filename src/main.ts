import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})
client.on('messageCreate', (msg) => {
	if (msg.content?.toUpperCase() === '창민 물줘') {
		msg.reply('아옳옳옳!!')
	}
	if (msg.content?.toUpperCase() === 'PING') {
		msg.reply('Pong!')
	}
	if (msg.content?.toUpperCase()?.startsWith('게임 추천')) {
		msg.reply('APEX 해, APEX 갓 겜, 하지만 난 못 해, 너무 슬 퍼')
	}
})
