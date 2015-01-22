var express = require('express');
var router = express.Router();

var dishes = require('../api/dish');

router.route('/dishes')
    .post(function(req,res) { dishes.addDish(req,res) })
    .get(function(req, res) { dishes.getAllDishes(req, res) });


router.route('/dishes/:dish_id')
    .get(function(req, res) { dishes.getSingleDish(req, res, req.params.dish_id) })
    .put(function(req, res) { dishes.updateDish(req, res, req.params.dish_id) })
    .delete(function(req, res) {dishes.deleteDish(req, res, req.params.dish_id) });

module.exports = router;
