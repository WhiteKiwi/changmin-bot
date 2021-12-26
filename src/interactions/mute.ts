import { Interaction } from '../common'
import { includes } from '../core/discover-functions'
import { react } from '../core/react-functions'

export const mute창민: Interaction = {
	discoverFunction: includes(['창민', '닥쳐']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			await 창민이.voice.setMute(true)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}

export const unmute창민: Interaction = {
	discoverFunction: includes(['창민', '대답']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			await 창민이.voice.setMute(false)
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}
