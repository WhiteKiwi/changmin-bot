import { Interaction } from '../common'
import { getRandomNumberByKey } from '../common/lib'
import { match } from '../core/discover-functions'
import { reply } from '../core/react-functions'

export const 오늘의_선창민: Interaction = {
	discoverFunction: match('오늘의선창민', { ignoreSpace: true }),
	reactFunction: reply(() => {
		const changminStatuses = [
			'오늘의 창민이는 맛있어요!',
			'오늘의 창민이는 이상해요!',
			'오늘의 창민이는 재밌어요!',
			'오늘의 창민이는 못생겼어요!',
			'오늘의 창민이는 안더러워요!',
			'오늘의 창민이는 더러워요!',
			'오늘의 창민이는 한심해요!',
			'오늘의 창민이는 슬퍼요!',
		]
		const todayKey = new Date().toISOString().slice(0, 10)
		const index = getRandomNumberByKey(todayKey) % 8
		return changminStatuses[index]
	}),
}
