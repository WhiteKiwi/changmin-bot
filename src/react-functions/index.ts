import { Message } from 'discord.js'

import { ReactFunction } from '../common/types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}
