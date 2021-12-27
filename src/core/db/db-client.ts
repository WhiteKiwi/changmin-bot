import { Db, MongoClient } from 'mongodb'

export class DbClient {
	private db!: Db
	private client!: MongoClient

	async initialize(url: string, dbName: string) {
		this.client = new MongoClient(url)
		await this.client.connect()
		this.db = this.client.db(dbName)
	}

	async close() {
		await this.client.close()
	}

	async insert(collectionName: string, data: any) {
		const collection = this.db.collection(collectionName)
		const insertResult = await collection.insertOne(data)
		console.log('Inserted documents =>', insertResult)
	}
}
