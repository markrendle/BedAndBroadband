# Bed & Broadband

This is the demo application I used in my [Simple.Web](https://github.com/markrendle/Simple.Web) presentation at [MonkeySpace 2013](http://monkeyspace.org).

The concept is rating hotels by the quality of their internet connections.

The app uses [AngularJS](http://angularjs.org) and [TypeScript](http://typescriptlang.org) on the client side, and Simple.Web to provide a RESTful API for the client to talk to.

The Simple.Web code is mainly in the BedAndBroadband.Api project. Look out for the LinksFrom attribute on the RateHotel class, and the way that metadata is used in the AngularJS app in the App/Services/HotelService.ts and App/Utils/Links.ts files.