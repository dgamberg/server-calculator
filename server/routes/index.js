var express = require('express');
var router = express.Router();
var path = require('path');

router.route('/add');
router.route('/subtract');
router.route('/multiply');
router.route('/divide');

//router.get('/add', function(req, res){
//});

router.post('/add', function(req, res){
    var output = {};
    output["value1"] = req.body.valueInput1;
    output["value2"] = req.body.valueInput2;
    output["operation"] = "added";
    output["outputTotal"] = parseInt(output["value1"]) + parseInt(output["value2"]);
    res.send(output);
});

router.post('/subtract', function(req, res){
    var output = {};
    output["value1"] = req.body.valueInput1;
    output["value2"] = req.body.valueInput2;
    output["operation"] = "subtracted";
    output["outputTotal"] = parseInt(output["value1"]) - parseInt(output["value2"]);
    res.send(output);
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