import { Header, Nav, ProblemSet } from './components.js'

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



