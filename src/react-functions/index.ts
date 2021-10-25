import { Message } from 'discord.js'

import { pseudoRandom } from '../lib'
import { ReactFunction } from '../types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function randomReply(
	args: string[],
	option?: { seed: number },
): ReactFunction {
	return (message: Message) => {
		if (option?.seed) {
			const randomNum = pseudoRandom(option.seed) % args.length
			const replytext = args[randomNum]
			message.reply(replytext)

			return
		}

		const randomNum = Math.floor(Math.random() * args.length)
		const replytext = args[randomNum]
		message.reply(replytext)
	}
}
