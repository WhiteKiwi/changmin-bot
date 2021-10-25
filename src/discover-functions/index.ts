import { DiscoverFunction, Message } from '../types'
export type TextParsingOption = { ignoreSpace: boolean }

export function match(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	return (message: Message) => {
		let content = message.content
		if (option?.ignoreSpace) content = content.replace(/ /gi, '')
		return content === keyword
	}
}

export function startWith(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	return (message: Message) => {
		return message.content.startsWith(keyword)
	}
}

export function includes(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	return (message: Message) => {
		return message.content.includes(keyword)
	}
}
