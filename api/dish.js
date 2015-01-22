var mongoose = require('mongoose');
var Dish = require('../models/dish');

module.exports.addDish = function(req, res) {
    var dish = new Dish(req.body.dish);

    dish.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            dish: dish
        });
    });
};

module.exports.getAllDishes = function(req, res) {
    Dish.find(function(err, dishes) {
        if(err) {
            res.send(err);
        }

        res.json({ dishes: dishes });
    })
};

module.exports.getSingleDish = function(req, res, id) {
    Dish.findById(id, function(err, dish) {
        if (err) {
            res.send(err);
        }
        res.json({dish: dish});
    });
};

module.exports.updateDish = function(req, res, id) {
    Dish.findByIdUpdate(id, {$set: req.body.dish}, function(err, dish) {
        if (err) {
            res.send(err);
        }
        res.json({dish: dish});
    });
};

module.exports.deleteDish = function(req, res, id) {
    Dish.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send(err);
        }
        res.sendStatus(200);
    });
};
