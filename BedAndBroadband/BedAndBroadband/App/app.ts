/// <reference path="_project.ts"/>

var app = angular.module("bandb", ["bandb.services", "ui.state", "ui.bootstrap"]);

app.config(($stateProvider: ng.ui.IStateProvider) => {
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