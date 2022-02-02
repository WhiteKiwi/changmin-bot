import { IndexBuilder } from './index-builder'
import { StringBuilder } from './string-builder'

function assertChangminLang(message: string) {
	if (message.split('\n')[0].replaceAll(' ', '') != '창민그거해봐그거') {
		throw new Error('코드의 시작이 적절하지 않습니다.')
	}
}

export function runChangminLang(message: string): string {
	InfiniteLoopDetector.clear()

	let variables: Record<string, number> = {}
	const output: StringBuilder = new StringBuilder()
	try {
		assertChangminLang(message)

		let lines = message.split('\n')
		for (
			let index = new IndexBuilder();
			index.getValue() < lines.length;
			index.increase()
		) {
			// 공백 제거
			let code = lines[index.getValue()].replaceAll(' ', '')

			if (!code) continue

			runCode(variables, code, output, index)
		}
	} catch (error: any) {
		return error.message
	}

	return output.toString() || '창민창민!'
}

function runCode(
	variables: Record<string, number>,
	code: string,
	output: StringBuilder,
	index: IndexBuilder,
) {
	// 조건문
	if (code.startsWith('혹시') && code.includes('?')) {
		runConditionalStatement(variables, code, output, index)
		return
	}

	// 변수 지정 or 값 대입
	if (code.startsWith('창민이') && code.includes('다')) {
		runVariableAssignment(variables, code)
		return
	}

	// goto 최대 횟수 변경
	if (code.startsWith('ㄱㄱ')) {
		setMaxGotoCount(variables, code)
		return
	}

	// goto
	if (code.startsWith('ㄱ')) {
		runGotoStatement(variables, code, index)
		return
	}

	// 정수 출력
	if (code.includes('.')) {
		printNumber(variables, code, output)
		return
	}

	// 문자 출력
	if (code.includes('!')) {
		printChar(variables, code, output)
		return
	}
}

function runConditionalStatement(
	variables: Record<string, number>,
	code: string,
	output: StringBuilder,
	index: IndexBuilder,
) {
	const seperatorIndex = code.indexOf('?')

	const condition: number = convertChangminDataToNumber(
		variables,
		code.substring(2, seperatorIndex),
	)

	if (condition != 0) {
		const statement = code.substring(seperatorIndex + 1)

		runCode(variables, statement, output, index)
	}
}

function runVariableAssignment(
	variables: Record<string, number>,
	code: string,
) {
	const seperatorIndex = code.indexOf('다')
	const variableName: string = code.substring(3, seperatorIndex)
	const value: number = convertChangminDataToNumber(
		variables,
		code.substring(seperatorIndex + 1),
	)

	variables[variableName] = value
}

function setMaxGotoCount(variables: Record<string, number>, code: string) {
	const value: number = convertChangminDataToNumber(
		variables,
		code.substring(2),
	)

	InfiniteLoopDetector.setThreshold(value)
}

function runGotoStatement(
	variables: Record<string, number>,
	code: string,
	index: IndexBuilder,
) {
	const value: number = convertChangminDataToNumber(
		variables,
		code.substring(1),
	)

	index.setValue(value - 1)
	InfiniteLoopDetector.count()
}

function printNumber(
	variables: Record<string, number>,
	code: string,
	output: StringBuilder,
) {
	const changminData = code.substring(0, code.indexOf('.'))
	const value = convertChangminDataToNumber(variables, changminData)

	output.append(value.toString())
}

function printChar(
	variables: Record<string, number>,
	code: string,
	output: StringBuilder,
) {
	const changminData = code.substring(0, code.indexOf('!'))
	const value = convertChangminDataToNumber(variables, changminData)

	output.append(String.fromCharCode(value))
}

function convertChangminDataToNumber(
	variables: Record<string, number>,
	changminData: string,
): number {
	let result = 0

	if (!changminData) {
		return result
	}

	let dataArray = changminData.split('')
	for (let index = 0; index < dataArray.length; index++) {
		switch (dataArray[index]) {
			case '창':
				result++
				break
			case 'ㅊ':
			case 'ㅎ':
				result--
				break
			case '민':
				result *= 10
				break
			case '선':
				result = Math.floor(result / 10)
				break
			case 'ㅁ':
				result *= -1
				break
			default:
				// 변수인지 확인 후 변수면 그 값을 더함
				const temp = changminData.substring(index, changminData.length)
				for (const variable of Object.keys(variables) as string[]) {
					if (temp.startsWith(variable)) {
						result += variables[variable]
						index += variable.length - 1
					}
				}
				break
		}
	}

	return result
}

class InfiniteLoopDetector {
	private static gotoCount: number
	private static gotoMaxThreshold: number

	public static clear() {
		this.gotoCount = 0
		this.gotoMaxThreshold = 100000
	}

	public static count() {
		this.gotoCount++

		if (this.gotoCount >= this.gotoMaxThreshold) {
			throw new Error('최대 ㄱ 횟수를 초과했습니다.')
		}
	}

	public static setThreshold(value: number) {
		if (value < 0) {
			this.gotoMaxThreshold = 0
			return
		}

		this.gotoMaxThreshold = value
	}

	public static getCount(): number {
		return this.gotoCount
	}
}
