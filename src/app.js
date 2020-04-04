render()

function render() {
	document.body.appendChild(Header('Math Mastery'))
	document.body.appendChild(ProblemSet(['3 * 2', '3 * 4', '3 * 5', '3 * 6', '3 * 7']))
}

function Header(title) {
	const header = document.createElement('header')
	header.textContent = title
	return header
}


function ProblemSet(expressions) {
	const problemSet = document.createElement('section')
	problemSet.classList.add('problem-set')

	expressions.forEach(expression => problemSet.appendChild(Question(expression)))

	return problemSet
}


function Question(expression) {
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


