import { Message as DiscordMessage } from 'discord.js'

export interface Message extends DiscordMessage {}

export type DiscoverFunction = (message: Message) => boolean | Promise<boolean>
export type ReactFunction = (message: Message) => void | Promise<void>
export type Interaction = {
	name?: string
	discoverFunction: DiscoverFunction
	reactFunction: ReactFunction
}
