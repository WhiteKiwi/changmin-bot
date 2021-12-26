import { VoiceChannel } from 'discord.js'

import { Interaction } from '../common'
import { getChannelById } from '../common/lib'
import { includes } from '../core/discover-functions'
import { react } from '../core/react-functions'

const 대기실ChannelId = '709763038684643389'
const 수면방ChannelId = '705043793992482826'

export const 창민_대기: Interaction = {
	discoverFunction: includes(['창민', '대기']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			const channel = await getChannelById(창민이.guild, 대기실ChannelId)
			await 창민이.voice.setChannel(channel as VoiceChannel)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}

export const 창민_잘자 = {
	discoverFunction: includes(['창민', '잘자']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			const channel = await getChannelById(창민이.guild, 수면방ChannelId)
			await 창민이.voice.setChannel(channel as VoiceChannel)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}
