import { Message } from 'discord.js'

import { ReactFunction } from '../types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function randomReply(args: string[]): ReactFunction {
	return (message: Message) => {
		const randomNum = Math.floor(Math.random() * args.length)
		const replytext = args[randomNum]
		message.reply(replytext)
	}
}
