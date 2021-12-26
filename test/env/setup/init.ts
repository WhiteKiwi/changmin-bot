import { setupMysql } from './mysql'

async function init() {
	await setupMysql()

	process.exit(0)
}
init()
