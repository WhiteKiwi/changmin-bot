import { Message, ReactFunction } from '../common/types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}
