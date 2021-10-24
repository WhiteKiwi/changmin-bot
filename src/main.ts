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
})
