export class IndexBuilder {
	private value: number

	constructor(init?: number) {
		if (!init) {
			this.value = 0
			return
		}

		this.value = init
	}

	increase() {
		this.value++
	}

	decrease() {
		this.value--
	}

	setValue(value: number) {
		this.value = value
	}

	getValue(): number {
		return this.value
	}
}
