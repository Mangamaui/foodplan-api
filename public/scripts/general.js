(function() {
    window.FoodPlanner = {};

    //array with weekday names.
    FoodPlanner.DaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    window.APP = {

        initialize: function() {
            FoodPlanner.indexView = new FoodPlanner.IndexView();
        }
    }

})();
