import { ReactFunction } from '../../common/types'
import { client } from '../db'
import { react } from './react'

export function reply(replyText: string | (() => string)): ReactFunction {
	return react(async ({ message, content }) => {
		const text = typeof replyText === 'string' ? replyText : replyText()
		await message.reply(text)
		await client.insert('replyLogs', { Original: content, Reply: text })
	})
}
