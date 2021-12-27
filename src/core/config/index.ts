import dotenv from 'dotenv'
dotenv.config()

export const config = {
	BOT_TOKEN: process.env.BOT_TOKEN || '',
	PREFIX: process.env.PREFIX || '',
	DB_URL: process.env.DB_URL || '',
	DB_NAME: process.env.DB_NAME || '',
} as const

const mustNotBeEmptyConfigKey: (keyof typeof config)[] = ['BOT_TOKEN']

for (const key of mustNotBeEmptyConfigKey) {
	if (!config[key]) throw new Error(`${key} must not be empty!`)
}
