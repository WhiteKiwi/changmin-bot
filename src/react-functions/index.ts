import { Message } from 'discord.js'

import { ReactFunction } from '../types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}
