import { ChatBot } from './chatbot'
import { config } from './config'
import { match } from './discover-functions'
import { getRandomFromDate } from './lib'
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
			reactFunction: staticReply(
				'오늘의 창민이는 ' +
					[
						'맛있어요!',
						'이상해요!',
						'재밌어요!',
						'못생겼어요!',
						'깨끗해요!',
						'더러워요!',
						'한심해요!',
						'슬퍼요!',
					][getRandomFromDate() % 8],
			),
		},
	])
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}
main()
