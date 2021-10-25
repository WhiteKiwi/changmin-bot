import dotenv from 'dotenv'
dotenv.config()

export const config = {
	BOT_TOKEN: process.env.BOT_TOKEN,
} as const

const mustNotBeEmptyConfigKey: (keyof typeof config)[] = ['BOT_TOKEN']

for (const key of mustNotBeEmptyConfigKey) {
	if (!config[key]) throw new Error(`${key} must not be empty!`)
}
