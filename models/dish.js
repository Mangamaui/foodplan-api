var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DishSchema = new Schema({
    title:          String,
    ingredients:    Array,
    categories:     Array
});


module.exports = mongoose.model('Dish', DishSchema);
