import { ChatBot } from './chatbot'
import { config } from './config'
import { match } from './discover-functions'
import { staticReply } from './react-functions'

async function main() {
	const chatBot = new ChatBot({ token: config.BOT_TOKEN })

	chatBot.setInteractions([
		{
			discoverFunction: match('창민물줘', { ignoreSpace: true }),
			reactFunction: staticReply('아옳옳옳!'),
		},
		{
			discoverFunction: match('창민밥줘', { ignoreSpace: true }),
			reactFunction: staticReply('아옳옳옳옳옳옳옳옳옳!'),
		},
		{
			discoverFunction: match('창민이불러줘', { ignoreSpace: true }),
			reactFunction: staticReply('<@399404459303895040>'),
		},
	])
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}
main()
