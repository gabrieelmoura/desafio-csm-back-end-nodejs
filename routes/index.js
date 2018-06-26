var express = require('express');
var router = express.Router();

var Form = require('../model/Form');

router.get('/find/:id([0-9a-fA-F]{24})', async function(req, res, next) {
  res.json(await Form.findById(req.params.id).exec());
});

module.exports = router;
