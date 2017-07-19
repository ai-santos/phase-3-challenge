import express from 'express'

const router = express.Router()

router.get('/api/supported-operations', (request, response) => {
	response.json({"/": "division","+": "addition", "-": "subtration", "*": "multiplication"})
})

router.get('/api/square', (request, response) => {
	const number = request.query.number
	const square = number * number
	response.json({"result": square })
})

router.post('/api/compute')


module.exports = router