import { GuildMember } from 'discord.js'

import { includes } from '../core/discover-functions'
import { interactWith창민이 } from '../core/react-functions/interact-with-창민이'

export const mute창민 = {
	discoverFunction: includes(['창민', '닥쳐']),
	reactFunction: interactWith창민이(async (창민이: GuildMember) => {
		try {
			await 창민이.voice.setMute(true)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}

export const unmute창민 = {
	discoverFunction: includes(['창민', '대답']),
	reactFunction: interactWith창민이(async (창민이: GuildMember) => {
		try {
			await 창민이.voice.setMute(false)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}
