import dotenv from 'dotenv'

import { ChatBot } from './chatbot'
import { match } from './discover-functions'
import { staticReply } from './react-functions'

dotenv.config()

async function main() {
	const chatBot = new ChatBot({ token: process.env.BOT_TOKEN })

	chatBot.setInteractions([
		{
			discoverFunction: match('창민물줘', { ignoreSpace: true }),
			reactFunction: staticReply('아옳옳옳!'),
		},
		{
			discoverFunction: match('창민밥줘', { ignoreSpace: true }),
			reactFunction: staticReply('아옳옳옳옳옳옳옳옳옳!'),
		},
	])
	chatBot.start()
}
main()
