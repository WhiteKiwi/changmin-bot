export function pseudoRandom(arg: number) {
	return (arg * 16807) % 2147483647
}
