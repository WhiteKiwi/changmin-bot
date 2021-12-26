import { Interaction } from '../common'
import { includes } from '../core/discover-functions'
import { react } from '../core/react-functions'

export const kick창민: Interaction = {
	discoverFunction: includes(['창민', '나가']),
	reactFunction: react(async ({ 창민이 }) => {
		try {
			await 창민이.voice.disconnect('바이')
		} catch (e) {
			console.log(e)
			// TODO: 에러처리
		}
	}),
}
