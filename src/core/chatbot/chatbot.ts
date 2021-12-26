import { Client, Intents } from 'discord.js'

import { Interaction } from '../../common/types'

export class ChatBot {
	private readonly token: string
	private readonly client: Client
	private interactions: Interaction[] = []

	private prefix?: string

	constructor({ token }: { token: string }) {
		this.token = token
		this.client = new Client({
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_MEMBERS,
			],
		})
		this.client.on('ready', () => {
			console.log(`Logged in as ${this.client.user?.tag || 'Unknown'}!`)
		})
		this.client.on('messageCreate', (message) => {
			// prefix가 있는데 message가 prefix에 해당하지 않으면 스킵
			if (this.prefix && !message.content.startsWith(this.prefix)) return
			// prefix 제거
			const regex = new RegExp('^' + this.prefix, 'gi')
			message.content = message.content.replace(regex, '')

			for (const interaction of this.interactions) {
				if (interaction.discoverFunction(message)) {
					interaction.reactFunction(message)
				}
			}
		})
	}

	setInteractions(interactions: Interaction[]) {
		this.interactions = interactions
	}

	setPrefix(prefix: string) {
		this.prefix = prefix
	}

	start() {
		this.client.login(this.token)
	}
}
