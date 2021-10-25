import { Client, Intents } from 'discord.js'

import { Interaction } from '../types'

export class ChatBot {
	private readonly token: string
	private readonly client: Client
	private interactions: Interaction[] = []

	constructor({ token }: { token: string }) {
		this.token = token
		this.client = new Client({
			intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
		})
		this.client.on('ready', () => {
			console.log(`Logged in as ${this.client.user.tag}!`)
		})
		this.client.on('messageCreate', (message) => {
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

	addInteraction(interaction: Interaction) {
		this.interactions.push(interaction)
	}

	start() {
		this.client.login(this.token)
	}
}
