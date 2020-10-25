var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./VerifyToken');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var turf = require('@turf/turf');

router.post('/mapUserTest', VerifyToken, function (req, res, next) {
  var line1 = turf.lineString([[126, -11], [129, -21]]);
  var line2 = turf.lineString([[123, -18], [131, -14]]);
  var intersects = turf.lineIntersect(line1, line2);
  res.status(200).send(intersects);
});

module.exports = router;