import { Message } from 'discord.js'

import { ReactFunction } from '../types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function todayRandomReply(...args: string[]): ReactFunction {
	return (message: Message) => {
		const today = new Date()
		const todayNum =
			today.getDate().toString() +
			today.getMonth().toString() +
			today.getFullYear().toString()
		const replytext = arguments[parseInt(todayNum) % arguments.length]
		message.reply(replytext)
	}
}
