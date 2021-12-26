import { Message, ReactFunction } from '../../common/types'

export function replyByCallback(
	generateText: (message: Message) => string | Promise<string>,
): ReactFunction {
	return async (message: Message) => {
		message.reply(await generateText(message))
	}
}
