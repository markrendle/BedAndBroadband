var BaseController = (function () {
    function BaseController() {
    }
    return BaseController;
})();
var HomeController = (function () {
    function HomeController($scope, hotelService) {
        this.$scope = $scope;
        hotelService.getRecentlyRated().then(function (collection) {
            $scope.hotels = collection.items;
        });
    }
    return HomeController;
})();
var services = angular.module("bandb.services", []);

var HotelService = (function () {
    function HotelService($http, $q, $window) {
        this.$http = $http;
        this.$q = $q;
        this.$window = $window;
    }
    HotelService.prototype.getRecentlyRated = function () {
        var _this = this;
        var deferred = this.$q.defer();
        this.$http.get("/hotels/recentlyRated").success(function (data) {
            deferred.resolve(data);
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
});
