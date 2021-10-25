import { Message } from 'discord.js'

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
			const today = new Date(option.seed)
			const todayNum =
				today.getDate().toString() +
				today.getMonth().toString() +
				today.getFullYear().toString()
			const replytext = args[parseInt(todayNum) % args.length]
			message.reply(replytext)
		} else {
			const randomNum = Math.floor(Math.random() * args.length)
			const replytext = args[randomNum]
			message.reply(replytext)
		}
	}
}
