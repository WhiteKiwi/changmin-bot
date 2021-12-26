import { getRandomFromDate } from './common/lib'
import { ChatBot, config } from './core/'
import { includes, match, startWith } from './discover-functions'
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
		{
			discoverFunction: includes('게임추천', { ignoreSpace: true }),
			reactFunction: staticReply('당연히 APEX 지'),
		},
		{
			discoverFunction: match('물', { ignoreSpace: true }),
			reactFunction: staticReply('꾸에에에에에에엙!'),
		},
		{
			discoverFunction: match('딱대', { ignoreSpace: true }),
			reactFunction: staticReply(
				'때론 맞을걸 알면서도 해야할 걸 해야만 하는 때가 있는거다!',
			),
		},
		{
			discoverFunction: includes('끝말잇기'),
			reactFunction: staticReply('나부터 할게, 해질녘'),
		},
		{
			discoverFunction: includes('개객기'),
			reactFunction: staticReply('멍멍'),
		},
	])
	chatBot.setPrefix(config.PREFIX)
	chatBot.start()
}
main()
