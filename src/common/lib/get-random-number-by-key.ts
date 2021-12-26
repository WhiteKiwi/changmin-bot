const dp: Record<string, number> = {}

export function getRandomNumberByKey(key: string): number {
	if (!dp[key]) {
		dp[key] = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
	}

	return dp[key]
}
