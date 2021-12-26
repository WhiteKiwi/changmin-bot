import { GuildMember } from 'discord.js'

import { includes } from '../core/discover-functions'
import { interactWith창민이 } from '../core/react-functions/interact-with-창민이'

export const kick창민 = {
	discoverFunction: includes(['창민', '나가']),
	reactFunction: interactWith창민이(async (창민이: GuildMember) => {
		await 창민이.voice.disconnect('바이')
	}),
}
