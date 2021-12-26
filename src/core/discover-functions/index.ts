import { DiscoverFunction, Message } from '../../common/types'
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
	keywords: string | string[],
	option?: TextParsingOption,
): DiscoverFunction {
	if (!Array.isArray(keywords)) {
		keywords = [keywords]
	}

	if (option?.ignoreSpace) {
		for (let i = 0; i < keywords.length; i++) {
			keywords[i] = removeSpaces(keywords[i])
		}
	}

	return (message: Message) => {
		let content = message.content
		if (option?.ignoreSpace) content = removeSpaces(content)

		for (const keyword of keywords) {
			if (!content.includes(keyword)) return false
		}
		return true
	}
}
