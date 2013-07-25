/// <reference path="../_project.ts"/>

interface RateDialogScope {
    hotel: IHotel;
    rating: IRating;
    ok(): void;
    cancel(): void;
}

class RateDialogController {
    constructor($scope: RateDialogScope, hotelService: HotelService, dialog: ng.ui.IDialog, hotel: IHotel) {
        $scope.hotel = hotel;
        $scope.rating = <IRating>{ quality: 1};
        $scope.ok = () => {
            hotelService.rate(hotel, $scope.rating).then(
                () => {
                    dialog.close(true);
                });
        };
        $scope.cancel = () => {
            dialog.close(false);
        };
    }
}
class RateHotelController {
    constructor($scope: HotelScope, $dialog: ng.ui.IDialogProvider, $state: ng.ui.IState) {
        console.log("Hello");
        var dialog = $dialog.dialog({
            backdrop: true,
            backdropClick: false,
            controller: "RateDialogController",
            templateUrl: "/html/ratedialog.html",
            resolve: {hotel: () => $scope.hotel}
        });
        dialog.open().then(() => {
            $state.transitionTo("base.hotel", { id: $state.params.id }, true);
        });
    }
}