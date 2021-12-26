import { DiscoverFunction, Message } from '../common/types'
export type TextParsingOption = { ignoreSpace: boolean }

function removeSpaces(text: string): string {
	return text.replace(/ /gi, '')
}

export function match(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	if (option?.ignoreSpace) keyword = removeSpaces(keyword)

	return (message: Message) => {
		let content = message.content
		if (option?.ignoreSpace) content = removeSpaces(content)
		return content === keyword
	}
}

export function startWith(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	if (option?.ignoreSpace) keyword = removeSpaces(keyword)

	return (message: Message) => {
		let content = message.content
		if (option?.ignoreSpace) content = removeSpaces(content)
		return content.startsWith(keyword)
	}
}

export function includes(
	keyword: string,
	option?: TextParsingOption,
): DiscoverFunction {
	if (option?.ignoreSpace) keyword = removeSpaces(keyword)

	return (message: Message) => {
		let content = message.content
		if (option?.ignoreSpace) content = removeSpaces(content)
		return content.includes(keyword)
	}
}
