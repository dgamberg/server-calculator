var express = require('express');
var router = express.Router();
var path = require('path');
//Module Imports
var createAdditionObject = require('../modules/createAdditionObject');
var createSubtractionObject = require('../modules/createSubtractionObject');

//Routes
router.route('/add');
router.route('/subtract');
router.route('/multiply');
router.route('/divide');

//Addition Object
router.post('/add', function(req, res){
    res.send(createAdditionObject(req));
});
// Subtraction Object
router.post('/subtract', function(req, res){
    res.send(createSubtractionObject(req));
});


router.post('/multiply', function(req, res){
    var output = {};
    output["value1"] = req.body.valueInput1;
    output["value2"] = req.body.valueInput2;
    output["operation"] = "multiplied";
    output["outputTotal"] = parseInt(output["value1"]) * parseInt(output["value2"]);
    res.send(output);
});

router.post('/divide', function(req, res){
    var output = {};
    output["value1"] = req.body.valueInput1;
    output["value2"] = req.body.valueInput2;
    output["operation"] = "divided";
    output["outputTotal"] = parseInt(output["value1"]) / parseInt(output["value2"]);
    res.send(output);
});

router.get('/*', function (req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;