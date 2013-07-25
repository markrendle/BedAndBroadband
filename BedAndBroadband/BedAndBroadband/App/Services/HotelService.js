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
