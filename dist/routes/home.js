"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _home = require('../controllers/home'); var _home2 = _interopRequireDefault(_home);

const router = _express.Router.call(void 0, );

router.get('/', _home2.default.index);

exports. default = router;
