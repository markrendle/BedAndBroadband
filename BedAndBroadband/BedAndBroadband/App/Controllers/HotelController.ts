/// <reference path="../_project.ts"/>

interface HotelScope extends ng.IScope {
    hotel: IHotel;
    addRating(): void;
}

class HotelController {
    constructor(private $scope: HotelScope, private $state: ng.ui.IState, hotelService: HotelService) {
        hotelService.get($state.params.id).then(
            (hotel: IHotel) => {
                $scope.hotel = hotel;
            });
        $scope.addRating = this.addRating.bind(this);
    }

    addRating() {
        this.$state.transitionTo("base.hotel.rate", { id: this.$state.params.id }, true);
    }
}