import { Interaction } from '../common'
import { includes } from '../core/discover-functions'
import { react } from '../core/react-functions'

export const deaf창민: Interaction = {
	discoverFunction: includes(['창민', '귀막아']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			await 창민이.voice.setDeaf(true)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}

export const undeaf창민: Interaction = {
	discoverFunction: includes(['창민', '들어']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			await 창민이.voice.setDeaf(false)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}
