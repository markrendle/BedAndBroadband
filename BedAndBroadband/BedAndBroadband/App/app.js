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
