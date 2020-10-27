var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./VerifyToken');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var turf = require('@turf/turf');
// var line1=require("../jsonInput/lines.json");
// var line2=require("../jsonInput/long-ls.json")

router.post('/mapUserTest', VerifyToken, function (req, res, next) {
  if ((typeof req.body.line1 !== 'undefined' && req.body.line1.length > 0) && (typeof req.body.line2 !== 'undefined' && req.body.line2.length > 0)) {
    var line1 = turf.lineString(req.body.line1);
    var line2 = turf.lineString(req.body.line2);
    var intersects = turf.lineIntersect(line1, line2);
    if (intersects && intersects.features.length==0){
      res.status(400).send({ "msg": "No intersect found" });
    }
    else{
      res.status(200).send(intersects);
    }
  }
  else {
    res.status(400).send({ "msg": "invalid input" });
  }
});

module.exports = router;