/// <reference path="../_project.ts"/>

var services = angular.module("bandb.services", []);

interface IHotel {
    name: string;
    rating: number;
}

interface ICollection<T> {
    items: T[];
}

class HotelService {
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $window: ng.IWindowService) { }

    getRecentlyRated() {
        var deferred = this.$q.defer();
        this.$http.get("/hotels/recentlyRated")
            .success((data: ICollection<IHotel>) => {
                deferred.resolve(data);
            })
            .error((error, status) => {
                deferred.reject();
                this.$window.alert("Error " + status + "; sorry");
            });
        return deferred.promise;
    }
}

services.service("hotelService", HotelService);