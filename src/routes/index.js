import express from 'express'

const router = express.Router()

router.get('/api/supported-operations', (request, response) => {
	response.json({"/": "division","+": "addition", "-": "subtration", "*": "multiplication"})
})

router.get('/api/square?number', )


module.exports = router