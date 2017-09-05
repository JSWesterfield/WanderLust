// next step: ensure trux.services.wishes exists

if (typeof trux.services == "undefined") {
    trux.services = {
        wishes: {}
    }
}
else {
    trux.services.wishes = {};
}

// assertion: trux.services.wishes

/*

if (typeof trux.services == "undefined") {
    trux.services = {};
}

trux.services.wish = { };

*/

trux.services.wishes.create = function (myData, onSuccess, onError) {

    var url = "/api/wishes";

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: myData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    
    $.ajax(url, settings);

};

trux.services.wishes.update = function (myData, onSuccess, onError) {

    var url = "/api/wishes/" + myData.id; //id retrieved from DB because table data exists

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: myData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "PUT"
    };

    $.ajax(url, settings);

};

trux.services.wishes.getAll = function (onSuccess, onError) {

    var url = "/api/wishes";

    var settings = {
        cache: false
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };

    $.ajax(url, settings);
};

trux.services.wishes.delete = function (id, onSuccess, onError) {

    var url = "/api/wishes/" + id;

    var settings = {
        cache: false
        , success: onSuccess
        , error: onError
        , type: "DELETE"
    };

    $.ajax(url, settings);
};

trux.services.wishes.selectWishById = function (id, onSuccess, onError) {

    var url = "/api/wishes/" + id;

    var settings = {
        cache: false
        , dataType
        , success: onSuccess
        , error: onError
        , type: "GET"
    };

    $.ajax(url, settings);
};

(function () {
    if (typeof (angular) !== 'undefined') {
        angular.module(APPNAME).factory("wishesService", WishesServices);

        WishesService.$inject = ["$baseService"]; // ask or $baseService

        function WishesService($baseService) {  // receive #baseService
            var serviceObject = trux.services.wishes;
            var service = $baseService.merge(true, {}, serviceObject, $baseService);
            return service;
        }
    }
})();