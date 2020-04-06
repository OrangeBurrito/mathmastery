
export function Nav(problemSets) {
	const nav = document.createElement('nav')
	nav.appendChild(ProblemSetSelector(problemSets))
	return nav
}

export function ProblemSetSelector(problemSets) {
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

export function Header(title) {
	const header = document.createElement('header')
	header.textContent = title
	return header
}

export function ProblemSet(expressions) {
	const problemSet = document.createElement('section')
	problemSet.classList.add('problem-set')

	expressions.forEach(expression => { 
		let questionComponent = Question(expression)
		problemSet.appendChild(questionComponent)
	})

	return problemSet
}


export function Question(expression) {

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