const dp = {}

export function getRandomByKey(key: string) {
	if (!dp[key]) {
		dp[key] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
	}

	return dp[key]
}
