if (typeof trux.services === "undefined") {
	trux.services = {
		notifications: {}
	};
}
else {
	trux.services.notifications = {};
}

trux.services.notifications.success = function (message) {
	toastr.success(message);
}

trux.services.notifications.error = function (message) {
	toastr.error(message);
}

trux.services.notifications.confirm = function (question, onConfirm) {
	swal({
		text: question,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'OK',
		cancelButtonText: 'Cancel',
		confirmButtonClass: 'btn btn-success',
		cancelButtonClass: 'btn btn-danger'
	}).then(onConfirm, function () { }) //empty function because cancel prompt requires some kind of function action or else logs an error
}

trux.services.notifications.dialog = function (message, onConfirm) {
	swal({
		text: message,
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		confirmButtonText: 'OK',
	}).then(onConfirm)
};

trux.services.notifications.errorDialog = function (responseJSON) {
	if (responseJSON.modelState) {
		var errors = responseJSON.modelState;
		var errorOutput = '';
		for (item in errors) {
			errorOutput = error[item] += ' '
		}
		trux.services.notifications.dialog(errorOutput);
	}
	else {
		trux.services.notifications.dialog(responseJSON.message);
	}
};

trux.services.notifications.redirectDialog = function (url, message) {
	Cookies.set('notificationsService-pendingDialog', message);
	location.hred = url;

};

trux.services.notifications.checkPendingDialogs = function () {
	var cookie = Cookie.get('notificationsService-pendingDialog');
	if (cookie != null) {
		trux.services.notifications.dialog(dialog);
		Cookies.remove('notificationsService-pendingDialog');
	};
};

//This code will associate a namespace (e.g. trux.service.myEntities) with an Angular DI name ("myEntityService")

(function () {
	if (typeof (angular) !== 'undefined') {
		angular.module(APPNAME).factory("notificationsService", NotificationsService);

		NotificationsService.$inject = ["$baseService"]; // ask for $baseService

		function NotificationsService($baseService) {	// ask for $baseService
			var ServiceObject = trux.services.notifications;
			var service = $baseService.merge(true, {}, ServiceObject, $baseService);
			return service;
		}
	}
})();