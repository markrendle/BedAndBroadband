var Links;
(function (Links) {
    function get(resource, rel) {
        var link = resource.links.filter(function (l) {
            return l.rel === rel;
        })[0];
        return link ? link.href : null;
    }
    Links.get = get;
})(Links || (Links = {}));
var BaseController = (function () {
    function BaseController() {
    }
    return BaseController;
})();
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
var services = angular.module("bandb.services", []);

var HotelService = (function () {
    function HotelService($http, $q, $window) {
        this.$http = $http;
        this.$q = $q;
        this.$window = $window;
    }
    HotelService.prototype._get = function (url) {
        var _this = this;
        var deferred = this.$q.defer();
        this.$http.get(url).success(function (data) {
            deferred.resolve(data);
        }).error(function (error, status) {
            deferred.reject();
            _this.$window.alert("Error " + status + "; sorry");
        });
        return deferred.promise;
    };

    HotelService.prototype.getRecentlyRated = function () {
        return this._get("/hotels/recentlyRated");
    };

    HotelService.prototype.get = function (id) {
        return this._get("/hotels/" + id);
    };

    HotelService.prototype.rate = function (hotel, rating) {
        var _this = this;
        var deferred = this.$q.defer();
        this.$http.post(Links.get(hotel, "add-rating"), rating).success(function () {
            deferred.resolve();
        }).error(function (error, status) {
            deferred.reject();
            _this.$window.alert("Error " + status + "; sorry");
        });
        return deferred.promise;
    };
    return HotelService;
})();

services.service("hotelService", HotelService);
var app = angular.module("bandb", ["bandb.services", "ui.state", "ui.bootstrap"]);

app.config(function ($stateProvider) {
    $stateProvider.state("base", {
        url: "",
        templateUrl: "/html/base.html",
        controller: BaseController
    });
    $stateProvider.state("base.home", {
        url: "/",
        templateUrl: "html/home.html",
        controller: HomeController
    });
    $stateProvider.state("base.hotel", {
        url: "/hotel/:id",
        templateUrl: "html/hotel.html",
        controller: HotelController
    });
    $stateProvider.state("base.hotel.rate", {
        url: "/rate",
        controller: RateHotelController
    });
});
