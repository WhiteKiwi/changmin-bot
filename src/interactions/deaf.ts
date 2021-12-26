import { GuildMember } from 'discord.js'

import { includes } from '../core/discover-functions'
import { interactWith창민이 } from '../core/react-functions/interact-with-창민이'

export const deaf창민 = {
	discoverFunction: includes(['창민', '귀막아']),
	reactFunction: interactWith창민이(async (창민이: GuildMember) => {
		await 창민이.voice.setDeaf(true)
	}),
}

export const undeaf창민 = {
	discoverFunction: includes(['창민', '들어']),
	reactFunction: interactWith창민이(async (창민이: GuildMember) => {
		await 창민이.voice.setDeaf(false)
	}),
}
