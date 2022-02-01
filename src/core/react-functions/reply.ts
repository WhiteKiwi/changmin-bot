import { ReactFunction } from '../../common/types'
import { client } from '../db'
import { react } from './react'

export function reply(
	replyText: string | ((message: string) => string),
): ReactFunction {
	return react(async ({ message }) => {
		const text =
			typeof replyText === 'string'
				? replyText
				: replyText(message.content)
		await message.reply(text)
		await client.insert('replyLogs', { Original: content, Reply: text })
	})
}
