'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/supported-operations', function (request, response) {
	response.json({ "/": "division", "+": "addition", "-": "subtration", "*": "multiplication" });
});

router.get('/api/square', function (request, response) {
	var number = request.query.number;
	var square = number * number;
	response.json({ "result": square });
});

router.post('/api/compute');

module.exports = router;