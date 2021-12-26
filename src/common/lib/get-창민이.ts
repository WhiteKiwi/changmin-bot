import { Guild, GuildMember } from 'discord.js'

import { 창민이SnowFlake } from '../../common'

export async function get창민이(guild: Guild): Promise<GuildMember> {
	const 창민이 = (await guild.members.fetch())?.get(창민이SnowFlake)
	if (!창민이) {
		throw new Error('창민이가 사라졌어요!')
	}
	return 창민이
}
