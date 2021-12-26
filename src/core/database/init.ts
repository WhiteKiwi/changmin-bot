import { join } from 'path'
import { createConnection } from 'typeorm'

export async function initializeConnection() {
	// ormconfig로 만들어보기
	await createConnection({
		name: 'default',
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		database: 'changmin-bot',
		username: 'testuser',
		password: 'TEST1234!',
		entities: [join(__dirname, '../../typeorm/entities/*.ts')],
	})
}
