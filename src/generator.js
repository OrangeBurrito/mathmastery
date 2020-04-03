export function genTimesTablesQuestions(base, max, count) {
	return ['2 * 3', '2 * 4']
}

export function genAdditionQuestions(min, max, count) {
	return ['2 + 3', '8 + 4']
}

export function genSubtractionQuestions(min, max, count) {
	return ['30 - 14', '65 - 12']
}

export function initialQuestions(){
	return [
		{expression: '2 * 2', answer: 4},
		{expression: '2 * 3', answer: 6},
		{expression: '2 * 4', answer: 8},
		{expression: '2 * 5', answer: 10},
		{expression: '2 * 6', answer: 12},
		{expression: '2 * 7', answer: 14},
		{expression: '2 * 8', answer: 16}
	]
}