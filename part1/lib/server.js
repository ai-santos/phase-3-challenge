'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

//middleware
server.use((0, _morgan2.default)('dev'));
server.use(_express2.default.static(__dirname + '/assets'));
server.use(_bodyParser2.default.urlencoded({ extended: true }));

//static routes
server.use('/', _routes2.default);

//local server
server.listen(process.env.PORT || 3000);