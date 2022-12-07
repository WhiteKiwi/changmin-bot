import { ChatBot, config } from './core'
import { client } from './core/db'
import { interactions } from './interactions'

async function main() {
	await client.initialize(config.DB_URL, config.DB_NAME)

	const chatBot = new ChatBot({ token: config.BOT_TOKEN })

	chatBot.setInteractions(interactions)
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => {})
