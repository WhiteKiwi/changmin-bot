function assertChangminLang(message: string) {
	if (message.split('\n')[0].replaceAll(' ', '') != '창민그거해봐그거') {
		throw new Error('코드의 시작이 적절하지 않습니다')
	}
}

export function runChangminLang(message: string): string {
	assertChangminLang(message)

	let variables: Record<string, number> = {}
	let output: string = ''

	let lines = message.split('\n')
	for (const line of lines) {
		// 공백 제거
		const code = line.replaceAll(' ', '')

		if (!code) continue

		// 변수 생성 or 대입
		if (code.startsWith('창민이') && code.includes('다')) {
			const seperatorIndex = code.indexOf('다')

			const variableName: string = code.substring(3, seperatorIndex)
			const value: number = convertChangminDataToNumber(
				variables,
				code.substring(seperatorIndex + 1, code.length),
			)

			variables[variableName] = value
			continue
		}

		// 정수 출력
		if (code.includes('.')) {
			const changminData = code.substring(0, code.indexOf('.'))
			const value = convertChangminDataToNumber(variables, changminData)

			output += value
			continue
		}

		// 문자 출력
		if (code.includes('!')) {
			const changminData = code.substring(0, code.indexOf('!'))
			const value = convertChangminDataToNumber(variables, changminData)

			output += String.fromCharCode(value)
			continue
		}
	}

	return output || '창민창민!'
}

function convertChangminDataToNumber(
	changminVariables: Record<string, number>,
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
			default:
				// 변수인지 확인 후 변수면 그 값을 더함
				const temp = changminData.substring(index, changminData.length)
				for (const variable of Object.keys(
					changminVariables,
				) as string[]) {
					if (temp.startsWith(variable)) {
						result += changminVariables[variable]
						index += variable.length - 1
					}
				}
				break
		}
	}

	return result
}
