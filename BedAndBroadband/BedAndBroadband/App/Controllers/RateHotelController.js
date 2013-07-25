var RateDialogController = (function () {
    function RateDialogController($scope, hotelService, dialog, hotel) {
        $scope.hotel = hotel;
        $scope.rating = { quality: 1 };
        $scope.ok = function () {
            hotelService.rate(hotel, $scope.rating).then(function () {
                dialog.close(true);
            });
        };
        $scope.cancel = function () {
            dialog.close(false);
        };
    }
    return RateDialogController;
})();
var RateHotelController = (function () {
    function RateHotelController($scope, $dialog, $state) {
        console.log("Hello");
        var dialog = $dialog.dialog({
            backdrop: true,
            backdropClick: false,
            controller: "RateDialogController",
            templateUrl: "/html/ratedialog.html",
            resolve: { hotel: function () {
                    return $scope.hotel;
                } }
        });
        dialog.open().then(function () {
            $state.transitionTo("base.hotel", { id: $state.params.id }, true);
        });
    }
    return RateHotelController;
})();
