import { ChatBot, config } from './core/'
import { interactions } from './interactions'

async function main() {
	const chatBot = new ChatBot({ token: config.BOT_TOKEN })

	chatBot.setInteractions(interactions)
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}
main()
