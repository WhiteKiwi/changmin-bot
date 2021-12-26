import path from 'path'
import { Connection, createConnection } from 'typeorm'

import {
	buildDockerImage,
	isDockerContainerRunning,
	isImageExist,
	runDockerContainer,
	sleep,
	teardownDockerContainer,
} from '../utils'
const IMAGE_NAME = `changmin-bot-test-db`
const CONTAINER_NAME = 'changmin-bot-test-db'
const DEFAULT = {
	TYPEORM: {
		HOST: 'localhost',
		PORT: 3306,
		DATABASE: 'changmin-bot',
		USERNAME: 'testuser',
		PASSWORD: 'TEST1234!',
	},
} as const

export async function setupMysql() {
	let connection: Connection
	console.log('Start to set up the db')

	if (!(await isImageExist(IMAGE_NAME))) {
		const isTeardowned = await teardownDockerContainer(CONTAINER_NAME)
		if (isTeardowned) console.log('Tear down the exist container')
		console.log('Docker image is not the latest version')
		console.log('Start to build new image...')
		await buildDockerImage(IMAGE_NAME, path.join(__dirname, '../docker/'))
	}
	if (!(await isDockerContainerRunning(IMAGE_NAME))) {
		console.log('There is no docker container')
		console.log('Run a new container...')
		await runDockerContainer(
			CONTAINER_NAME,
			IMAGE_NAME,
			'-d --rm -p 3306:3306',
		)

		// DB 실행 확인
		console.log('Waiting DB starts...')
		await sleep(20000)

		await createConnection({
			type: 'mysql',
			host: DEFAULT.TYPEORM.HOST,
			port: DEFAULT.TYPEORM.PORT,
			database: DEFAULT.TYPEORM.DATABASE,
			username: DEFAULT.TYPEORM.USERNAME,
			password: DEFAULT.TYPEORM.PASSWORD,
			entities: [
				path.join(
					__dirname,
					'../../../server/**/src/typeorm/entities/*.js',
				),
			],
			migrations: [
				path.join(
					__dirname,
					'../../../server/**/src/typeorm/migrations/*.js',
				),
			],
			migrationsTableName: 'migrations',
			migrationsRun: true,
		})
	} else {
		console.log('Initialize DB...')

		// DB 초기화
		connection = await createConnection({
			type: 'mysql',
			host: DEFAULT.TYPEORM.HOST,
			port: DEFAULT.TYPEORM.PORT,
			database: DEFAULT.TYPEORM.DATABASE,
			username: DEFAULT.TYPEORM.USERNAME,
			password: DEFAULT.TYPEORM.PASSWORD,
			entities: [
				path.join(
					__dirname,
					'../../../server/**/src/typeorm/entities/*.js',
				),
			],
			migrations: [
				path.join(
					__dirname,
					'../../../server/**/src/typeorm/migrations/*.js',
				),
			],
			migrationsTableName: 'migrations',
			migrationsRun: true,
		})

		await connection.query('SET FOREIGN_KEY_CHECKS = 0')

		for (const entity of connection.entityMetadatas) {
			const repository = await connection.getRepository(entity.name)
			await repository.query(`TRUNCATE TABLE \`${entity.tableName}\``)
		}

		await connection.query('SET FOREIGN_KEY_CHECKS = 1')
	}
}
