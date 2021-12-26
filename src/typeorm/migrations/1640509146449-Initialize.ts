import { MigrationInterface, QueryRunner } from 'typeorm'

export class Initialize1640509146449 implements MigrationInterface {
	name = 'Initialize1640509146449'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`tests\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`content\` varchar(500) NOT NULL, UNIQUE INDEX \`IDX_3bc9d62d05a3c5ec10cf58aa4a\` (\`content\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DROP INDEX \`IDX_3bc9d62d05a3c5ec10cf58aa4a\` ON \`tests\``,
		)
		await queryRunner.query(`DROP TABLE \`tests\``)
	}
}
