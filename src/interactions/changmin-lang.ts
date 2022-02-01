import { Interaction } from '../common'
import { runChangminLang } from '../common/lib'
import { startWith } from '../core/discover-functions'
import { reply } from '../core/react-functions'

export const changminLang: Interaction = {
	discoverFunction: startWith('창민그거해봐그거', { ignoreSpace: true }),
	reactFunction: reply(runChangminLang),
}
