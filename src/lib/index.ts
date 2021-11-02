let dateDictionary = {}

export function getRandomFromDate() {
	let temp = new Date()
	const todayDate = new Date(
		temp.getFullYear(),
		temp.getMonth(),
		temp.getDate(),
	).getTime()

	if (todayDate in dateDictionary) {
		return dateDictionary[todayDate]
	} else {
		const randomValue = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
		dateDictionary[todayDate] = randomValue
		return randomValue
	}
}
