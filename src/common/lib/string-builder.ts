export class StringBuilder {
	private value: string

	constructor() {
		this.value = ''
	}

	append(source: string) {
		this.value += source
	}

	clear() {
		this.value = ''
	}

	isEmpty(): boolean {
		return !this.value
	}

	toString(): string {
		return this.value
	}
}
