/// <reference path="../_project.ts"/>

var services = angular.module("bandb.services", []);

interface IHotel extends IWithLinks {
    id: number;
    name: string;
    rating: number;
}

interface IRating {
    quality: number;
    downloadMbps: number;
    uploadMbps: number;
}

interface ICollection<T> {
    items: T[];
}

class HotelService {
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $window: ng.IWindowService) { }

    private _get(url: string) {
        var deferred = this.$q.defer();
        this.$http.get(url)
            .success((data: ICollection<IHotel>) => {
                deferred.resolve(data);
            })
            .error((error, status) => {
                deferred.reject();
                this.$window.alert("Error " + status + "; sorry");
            });
        return deferred.promise;
    }

    getRecentlyRated() {
        return this._get("/hotels/recentlyRated");
    }

    get(id: number) {
        return this._get("/hotels/" + id);
    }

    rate(hotel: IHotel, rating: IRating) {
        var deferred = this.$q.defer();
        this.$http.post(Links.get(hotel, "add-rating"), rating)
            .success(() => {
                deferred.resolve();
            })
            .error((error, status) => {
                deferred.reject();
                this.$window.alert("Error " + status + "; sorry");
            });
        return deferred.promise;
    }
}

services.service("hotelService", HotelService);