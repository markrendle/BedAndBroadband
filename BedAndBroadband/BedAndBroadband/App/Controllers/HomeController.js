var HomeController = (function () {
    function HomeController($scope, hotelService) {
        this.$scope = $scope;
        hotelService.getRecentlyRated().then(function (collection) {
            $scope.hotels = collection.items;
        });
    }
    return HomeController;
})();
