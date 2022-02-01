import { Interaction } from '../common'
import { getChangminLangOutput } from '../common/lib'
import { startWith } from '../core/discover-functions'
import { react } from '../core/react-functions'

export const changminLang: Interaction = {
	discoverFunction: startWith('창민그거해봐그거', { ignoreSpace: true }),
	reactFunction: react(async ({ message }) => {
		const text = getChangminLangOutput(message.content)
		await message.reply(text)
	}),
}
