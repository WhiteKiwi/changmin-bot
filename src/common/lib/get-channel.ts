import { Guild, GuildChannel } from 'discord.js'

export async function getChannelById(
	guild: Guild,
	id: string,
): Promise<GuildChannel> {
	const channelCollection = await guild.channels.fetch()
	const channel = await channelCollection.get(id)
	if (!channel) throw new Error('채널없음')
	return channel
}
