var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./VerifyToken');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var turf = require('@turf/turf');
var line1=require("../jsonInput/lines.json");
var line2=require("../jsonInput/long-ls.json")

router.post('/mapUserTest', VerifyToken, function (req, res, next) {
  // line1= JSON.stringify(line1);
  // line2= JSON.stringify(line2);
  var LineInterect = {
    "type": "FeatureCollection",
    "features": [line1, line2]
  };
  // var intersection = turf.intersect(line1, line2);
  var intersects = turf.lineIntersect(line1, line2);
  res.status(200).send(intersects);
  // var line1 = turf.lineString([[126, -11], [129, -21]]);
  // var line2 = turf.lineString([[123, -18], [131, -14]]);
  // var intersects = turf.lineIntersect(line1, line2);
  // res.status(200).send(intersects);
});

module.exports = router;