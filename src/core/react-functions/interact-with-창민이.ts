import { GuildMember } from 'discord.js'

import { Message, ReactFunction } from '../../common'
import { get창민이 } from '../../common/lib/get-창민이'

export function interactWith창민이(
	interactCallback: (창민이: GuildMember) => void | Promise<void>,
): ReactFunction {
	return async (message: Message) => {
		if (!message.guild) {
			throw new Error('길드없음?')
		}
		const 창민이 = await get창민이(message.guild)
		await interactCallback(창민이)
	}
}
