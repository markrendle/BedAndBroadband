/// <reference path="../_project.ts"/>

interface HomeScope extends ng.IScope {
    hotels: IHotel[];
}

class HomeController {
    constructor(private $scope: HomeScope, hotelService: HotelService) {
        hotelService.getRecentlyRated().then(
            (collection: ICollection<IHotel>) => {
                $scope.hotels = collection.items;
            });
    }
}