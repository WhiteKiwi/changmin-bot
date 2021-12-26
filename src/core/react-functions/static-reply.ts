import { 창민이SnowFlake } from '../../common'
import { Message, ReactFunction } from '../../common/types'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function staticReply2(replyText: string): ReactFunction {
	return async (message: Message) => {
		const 창민이 = (await message.guild?.members.fetch())?.get(
			창민이SnowFlake,
		)
		message.reply(replyText)
	}
}
