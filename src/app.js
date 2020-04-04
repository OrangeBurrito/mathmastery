
const problemSets = [
	{
		name: '2 times tables',
		expressions: [
			{ label: '2 * 2', answer: 4 },
			{ label: '2 * 4', answer: 8 }, 
			{ label: '2 * 5', answer: 10 }, 
			{ label: '2 * 6', answer: 12 }, 
			{ label: '2 * 7', answer: 14 }
		]		
	},
	{
		name: '3 times tables',
		expressions: [
			{ label: '3 * 2', answer: 6 },
			{ label: '3 * 4', answer: 12 }, 
			{ label: '3 * 5', answer: 15 }, 
			{ label: '3 * 6', answer: 18 }, 
			{ label: '3 * 7', answer: 21 }
		]		
	},
]

render(problemSets[1])

function render(problemSet) {
	document.body.appendChild(Header('Math Mastery ' + problemSet.name))
  document.body.appendChild(ProblemSet(problemSet.expressions))
}

function Header(title) {
	const header = document.createElement('header')
	header.textContent = title
	return header
}


function ProblemSet(expressions) {
	const problemSet = document.createElement('section')
	problemSet.classList.add('problem-set')

	expressions.forEach(expression => { 
		let questionComponent = Question(expression)
		problemSet.appendChild(questionComponent)
	})

	return problemSet
}


function Question(expression) {

	const q = document.createElement('div')
	q.className = 'question'
	q.setAttribute('answer', expression.answer)

	const label = document.createElement('label')
	label.textContent = expression.label

	const input = document.createElement('input')
	input.setAttribute('text', 'number')

	q.appendChild(label)
	q.appendChild(input)

	return q
}


