
let selectedId = 1
const problemSets = [
	{
		id: 1,
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
		id: 2,
		name: '3 times tables',
		expressions: [
			{ label: '3 * 2', answer: 6 },
			{ label: '3 * 4', answer: 12 }, 
			{ label: '3 * 5', answer: 15 }, 
			{ label: '3 * 6', answer: 18 }, 
			{ label: '3 * 7', answer: 21 }
		]		
	},
	{
		id: 3,
		name: '4 times tables',
		expressions: [
			{ label: '4 * 2', answer: 8 },
			{ label: '4 * 4', answer: 16 }, 
			{ label: '4 * 5', answer: 20 }, 
			{ label: '4 * 6', answer: 24 }, 
			{ label: '4 * 7', answer: 28 }
		]		
	},
]

render(problemSets, selectedId)

function render(problemSets, selectedId) {
	const body = document.body

	body.appendChild(Header('Math Mastery'))
	body.appendChild(Nav(problemSets))
  body.appendChild(ProblemSet(problemSets[0].expressions))
}

function Nav(problemSets) {
	const nav = document.createElement('nav')
	nav.appendChild(ProblemSetSelector(problemSets))
	return nav
}

function ProblemSetSelector(problemSets) {
	const selectWrap = document.createElement('div')
	selectWrap.className = 'select-wrap'

	const select = document.createElement('select')

	for (const set of problemSets) {
		const option = document.createElement('option')
		option.textContent = set.name
		option.setAttribute('value', set.id)
		select.append(option)
	}

	selectWrap.append(select)

	return selectWrap
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


