/*================================*/
/*           collections          */
/*================================*/

(function() {
    FoodPlanner.Dishlist = Backbone.Collection.extend({
        className: 'list',
        id:     'dishes',
        model:  FoodPlanner.Dish ,
        url:    '/api/dishes',

        generateList: function(attributes) {
            var list  = _.flatten(
                this.map(function(dish) {
                    return dish.get(attributes);
                })
            );

            return list = _.uniq(list);
        },

        parse: function(response, options) {
            return response.dishes;
        }

    });

    FoodPlanner.Week = Backbone.Collection.extend({
        className: 'list',
        id:     'week',
        model: FoodPlanner.Day,

        initialize: function() {
            var dayModels = _.map(FoodPlanner.DaysArr, function(day, id) {
                return new FoodPlanner.Day({id: id+1, name: day});
            });

            this.set(dayModels);
        },

    });
})();
