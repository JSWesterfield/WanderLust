﻿wanderLust.services.wish = wanderLust.services.wish || {};

wanderLust.services.wish.selectAll = function (onSuccess, onError) {
    var url = '/api/wish';
    var settings = {
        cache: false,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: 'GET'
    };
    $.ajax(url, settings);
};

wanderLust.services.wish.save = function (data, onSuccess, onError) {
    var url = '/api/wish';
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: 'POST',
        data: data,
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

wanderLust.services.wish.update = function (data, onSuccess, onError) {
    var url = '/api/wish';
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: 'PUT',
        data: data,
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

wanderLust.services.wish.delete = function (data, onSuccess, onError) {
    var url = '/api/wish?id=' + data;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: 'DELETE',
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};