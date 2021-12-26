import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tests' })
export class Test {
	@PrimaryGeneratedColumn('increment', { unsigned: true })
	id: number

	@Column('varchar', { length: 500, unique: true })
	content: string
}
