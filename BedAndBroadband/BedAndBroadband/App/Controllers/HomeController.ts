/// <reference path="../_project.ts"/>

interface HomeScope extends ng.IScope {
    hotels: IHotel[];
    goToHotel(hotel: IHotel): void;
}

class HomeController {
    constructor(private $scope: HomeScope, hotelService: HotelService, private $state: ng.ui.IState) {
        hotelService.getRecentlyRated().then(
            (collection: ICollection<IHotel>) => {
                $scope.hotels = collection.items;
            });
        $scope.goToHotel = this.goToHotel.bind(this);
    }

    goToHotel(hotel: IHotel) {
        this.$state.transitionTo("base.hotel", { id: hotel.id, hotel: hotel }, true);
    }
}