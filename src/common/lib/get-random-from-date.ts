const dateDictionary = {}

export function getRandomFromDate() {
	const todayKey = new Date().toISOString().slice(0, 10)

	if (!dateDictionary[todayKey]) {
		dateDictionary[todayKey] = Math.floor(
			Math.random() * Number.MAX_SAFE_INTEGER,
		)
	}

	return dateDictionary[todayKey]
}
