import { Message, ReactFunction } from '../common/types'

export function replyByCallback(generateText: () => string): ReactFunction {
	return (message: Message) => {
		message.reply(generateText())
	}
}
