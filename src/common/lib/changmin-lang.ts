export function getChangminLangOutput(message: string): string {
	let variables: Record<string, number> = {}
	let output: string = ''

	let codeArray = message.split('\n')
	for (let index = 0; index < codeArray.length; index++) {
		// 공백 제거
		const code = codeArray[index].replace(/ /gi, '')

		// 코드의 시작이 잘못되었을 때 예외 발생
		if (index == 0 && code != '창민그거해봐그거') {
			output = ChangminException.InvalidInitialException
			break
		}

		if (code == '') continue

		// 변수 생성 및 대입
		if (code.startsWith('창민이') && code.includes('다')) {
			const seperatorIndex = code.indexOf('다')

			const variableName: string = code.substring(3, seperatorIndex)
			const value: number = converseChangminDataToNumber(
				variables,
				code.substring(seperatorIndex + 1, code.length),
			)

			variables[variableName] = value
			continue
		}

		// 정수 출력
		if (code.includes('.')) {
			const changminData = code.substring(0, code.indexOf('.'))
			const value = converseChangminDataToNumber(variables, changminData)

			output += value
			continue
		}

		// 문자 출력
		if (code.includes('!')) {
			const changminData = code.substring(0, code.indexOf('!'))
			const value = converseChangminDataToNumber(variables, changminData)

			output += String.fromCharCode(value)
			continue
		}
	}

	if (output == '') {
		output = '창민창민!'
	}

	return output
}

function converseChangminDataToNumber(
	changminVariables: Record<string, number>,
	changminData: string,
): number {
	let result = 0

	if (changminData == '') {
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

enum ChangminException {
	InvalidInitialException = '코드의 시작이 적절하지 않습니다',
}
