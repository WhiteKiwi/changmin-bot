import { Message } from '../common/types'
import { match } from '.'

describe('match', () => {
	it('성공 케이스', async () => {
		const keyword = '창민'
		const text = '창민'
		expect(match(keyword)({ content: text } as Message)).toBeTruthy()
	})

	it('성공 케이스 - 공백제거 옵션', async () => {
		const keyword = '창 민'
		const text = '창민'
		expect(
			match(keyword, { ignoreSpace: true })({ content: text } as Message),
		).toBeTruthy()
	})

	it('실패 케이스', async () => {
		const keyword = '창민'
		const text = '창민2'
		expect(match(keyword)({ content: text } as Message)).toBeFalsy()
	})

	it('실패 케이스 - 공백제거 옵션', async () => {
		const keyword = '창민'
		const text = '창민2'
		expect(
			match(keyword, { ignoreSpace: true })({ content: text } as Message),
		).toBeFalsy()
	})
})
