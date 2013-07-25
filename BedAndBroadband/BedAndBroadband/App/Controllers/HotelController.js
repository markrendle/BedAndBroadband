var HotelController = (function () {
    function HotelController($scope, $state, hotelService) {
        this.$scope = $scope;
        this.$state = $state;
        hotelService.get($state.params.id).then(function (hotel) {
            $scope.hotel = hotel;
        });
        $scope.addRating = this.addRating.bind(this);
    }
    HotelController.prototype.addRating = function () {
        this.$state.transitionTo("base.hotel.rate", { id: this.$state.params.id }, true);
    };
    return HotelController;
})();
