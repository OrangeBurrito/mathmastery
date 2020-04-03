

document.body.appendChild(createHeader())
document.body.appendChild(createProblemSet(['3 * 2', '3 * 4', '3 * 5', '3 * 6', '3 * 7']))


function createHeader() {
	const header = document.createElement('header')
	header.textContent = 'Math Mastery'
	return header
}


function createProblemSet(expressions) {
	const problemSet = document.createElement('section')
	problemSet.classList.add('problem-set')

	expressions.forEach(e => problemSet.appendChild(createQuestion(e)))

	return problemSet
}


function createQuestion(expression) {
	const q = document.createElement('div')
	q.className = 'question'
	
	const label = document.createElement('label')
	label.textContent = expression
	
	const input = document.createElement('input')
	input.setAttribute('text', 'number')
	
	q.appendChild(label)
	q.appendChild(input)

	return q
}


