import { Message } from 'discord.js'

import { pseudoRandom } from '../lib'
import { ReactFunction } from '../types'

/*-- database --*/
import { mysqlDB } from '../database'

export function staticReply(replyText: string): ReactFunction {
	return (message: Message) => {
		message.reply(replyText)
	}
}

export function randomReply(
	args: string[],
	option?: { seed: number },
): ReactFunction {
	return (message: Message) => {
		if (option?.seed) {
			const randomNum = pseudoRandom(option.seed) % args.length
			const replytext = args[randomNum]
			message.reply(replytext)

			return
		}

		const randomNum = Math.floor(Math.random() * args.length)
		const replytext = args[randomNum]
		message.reply(replytext)
	}
}

export function hungerStatReply(): ReactFunction {
	return (message: Message) => {
		mysqlDB.query(
			'SELECT hunger FROM damagochi',
			(error, results, fields) => {
				if (error) {
					console.log(error)
				}

				var hunger = results[0].hunger
				console.log('창민 배고픔 : ' + hunger)

				var msg = ''

				if (hunger <= 100 && hunger > 70) {
					msg = '창민이는 배가 불러욧!! XD'
				} else if (hunger <= 70 && hunger > 40) {
					msg = '창민이는 딱히 배고프지 않아용!!! =)'
				} else if (hunger <= 40 && hunger > 10) {
					msg = '창민이... 배고파요 ㅠㅅㅠ'
				} else if (hunger <= 10 && hunger > 0) {
					msg = '창..민..이.. 아..사 직전...이에요... (ㅡ,ㅠ)'
				} else {
					msg = '창민이는 아사했습니다.'
				}

				message.reply(msg)
			},
		)
	}
}
