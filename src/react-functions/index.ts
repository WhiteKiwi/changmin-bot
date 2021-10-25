import { Message } from 'discord.js'

import { ReactFunction } from '../types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function randomReply(...args: string[]): ReactFunction {
	return (message: Message) => {
		const randNum = Math.floor(Math.random() * arguments.length)
		const replytext = arguments[randNum]
		message.reply(replytext)
	}
}
