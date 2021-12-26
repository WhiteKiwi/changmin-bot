import { Interaction, 창민이SnowFlake } from '../common'
import { includes, match } from '../core/discover-functions'
import { reply } from '../core/react-functions'
import { 창민_대기, 창민_잘자 } from './channel'
import { deaf창민, undeaf창민 } from './deaf'
import { kick창민 } from './kick'
import { mute창민, unmute창민 } from './mute'
import { 오늘의_선창민 } from './today'

export const interactions: Interaction[] = [
	오늘의_선창민,
	mute창민,
	unmute창민,
	deaf창민,
	undeaf창민,
	kick창민,
	창민_대기,
	창민_잘자,
	{
		discoverFunction: match('창민물줘', { ignoreSpace: true }),
		reactFunction: reply('아옳옳옳!'),
	},
	{
		discoverFunction: match('창민밥줘', { ignoreSpace: true }),
		reactFunction: reply('아옳옳옳옳옳옳옳옳옳!'),
	},
	{
		discoverFunction: match('창민이불러줘', { ignoreSpace: true }),
		reactFunction: reply(`<@${창민이SnowFlake}>`),
	},
	{
		discoverFunction: includes('게임추천', { ignoreSpace: true }),
		reactFunction: reply('당연히 APEX 지'),
	},
	{
		discoverFunction: match('물', { ignoreSpace: true }),
		reactFunction: reply('꾸에에에에에에엙!'),
	},
	{
		discoverFunction: match('딱대', { ignoreSpace: true }),
		reactFunction: reply(
			'때론 맞을걸 알면서도 해야할 걸 해야만 하는 때가 있는거다!',
		),
	},
	{
		discoverFunction: includes('끝말잇기'),
		reactFunction: reply('나부터 할게, 해질녘'),
	},
	{
		discoverFunction: includes('개객기'),
		reactFunction: reply('멍멍'),
	},
]
