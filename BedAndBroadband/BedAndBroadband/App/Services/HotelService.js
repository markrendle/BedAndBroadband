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
