import { ReactFunction } from '../../common/types'
import { react } from './react'

export function reply(replyText: string | (() => string)): ReactFunction {
	return react(async ({ message }) => {
		const text = typeof replyText === 'string' ? replyText : replyText()
		await message.reply(text)
	})
}
