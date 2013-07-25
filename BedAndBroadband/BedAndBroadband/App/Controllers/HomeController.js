var HomeController = (function () {
    function HomeController($scope, hotelService, $state) {
        this.$scope = $scope;
        this.$state = $state;
        hotelService.getRecentlyRated().then(function (collection) {
            $scope.hotels = collection.items;
        });
        $scope.goToHotel = this.goToHotel.bind(this);
    }
    HomeController.prototype.goToHotel = function (hotel) {
        this.$state.transitionTo("base.hotel", { id: hotel.id, hotel: hotel }, true);
    };
    return HomeController;
})();
