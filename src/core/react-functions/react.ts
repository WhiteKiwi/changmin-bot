import { GuildMember } from 'discord.js'

import { get창민이 } from '../../common/lib/get-창민이'
import { Message, ReactFunction } from '../../common/types'

interface ReactArguments {
	message: Message
	content: string
	창민이: GuildMember
}

export function react(
	doSomething: (args: ReactArguments) => Promise<void>,
): ReactFunction {
	return async (message: Message) => {
		if (!message.guild) {
			throw new Error('길드없음?')
		}
		const 창민이 = await get창민이(message.guild)
		doSomething({ message, content: message.content, 창민이 })
	}
}
