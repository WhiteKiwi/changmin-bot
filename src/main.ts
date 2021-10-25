import { ChatBot } from './chatbot'
import { config } from './config'
import { match } from './discover-functions'
import { randomReply, staticReply } from './react-functions'

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
		{
			discoverFunction: match('오늘의선창민', { ignoreSpace: true }),
			reactFunction: randomReply(
				[
					'오늘의 창민이는 맛있어요!',
					'오늘의 창민이는 잘생겼어요!',
					'오늘의 창민이는 재밌어요!',
					'오늘의 창민이는 못생겼어요!',
					'오늘의 창민이는 깨끗해요!',
					'오늘의 창민이는 더러워요!',
					'오늘의 창민이는 한심해요!',
				],
				{
					seed: new Date(
						new Date().getFullYear(),
						new Date().getMonth(),
						new Date().getDate(),
					).getTime(),
				},
			),
		},
	])
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}
main()
