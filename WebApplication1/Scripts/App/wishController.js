(function () {

    'use strict';
    angular.module('exampleApp').controller('WishController', WishController);

    WishController.$inject = ['$scope', 'wishService'];

    function WishController($scope, wishService) {
        var vm = this;
        vm.$scope = $scope;
        vm.wishService = wishService;
        vm.displayBodyContent = false;
        vm.selectAll = _selectAll;
        vm.createPerson = _createWish;
        vm.save = _save;
        vm.cancel = _cancel;
        vm.editUser = _editUser;
        vm.deleteUser = _deleteUser;
        vm.renderWish = _renderWish;

        vm.items = [];
        vm.selectedItem = null;
        vm.itemToDelete = null;
        vm.message = "Welcome to the Wish page!!!";
        vm.heading = "Create a new Wish!";

        render();
        function render() {
            console.log("Wish index page is ready");
            vm.selectAll();
        };

        function _selectAll() {
            console.log("Executing Wish Service SelectAll()...");
            vm.wishService.selectAll(onSelectAllSuccess, onError);
            vm.displayBodyContent = true;
            console.log("Executed Wish Service SelectAll()");
        };

        function _createWish() {
            vm.selectedItem = {};
            console.log("New person has been created!");
        };

        function _renderWish() {
            $("tbody tr").remove();
            for (var i = 0; i < vm.items.length; i++) {
                var template = $($('#template').html());
                template.find(".id").text(vm.items[i].id);
                template.find(".firstName").text(vm.items[i].firstName);
                template.find(".lastName").text(vm.items[i].lastName);
                template.find(".middleInitial").text(vm.items[i].middleInitial);
                template.appendTo(".WishList");
            }
            $("tbody").on("click", ".edit", vm.editUser);
            $("tbody").on("click", ".delete", vm.deleteUser);
        };

        function _save() {
            console.log("Executing Wish Service Save()...");
            if (vm.selectedItem.id) {
                vm.wishService.update(vm.selectedItem, onUpdateSuccess, onError);
            } else {
                vm.wishService.save(vm.selectedItem, onSaveSuccess, onError);
            }
            console.log("Executed Wish Service Save()");
        };

        function _cancel() {
            vm.selectedItem = null;
        };

        function _editUser() {
            var targetId = $(this).closest('tr').find('.id').text();
            var selectedId = parseInt(targetId);
            for (var i = 0; i < vm.items.length; i++) {
                if (vm.items[i].id == selectedId) {
                    vm.$scope.$apply(function () {
                        vm.selectedItem = vm.items[i];
                    });
                    break;
                }
            }
        };

        function _deleteUser() {
            var targetId = $(this).closest('tr').find('.id').text();
            vm.itemToDelete = parseInt(targetId);
            for (var i = 0; i < vm.items.length; i++) {
                if (vm.items[i].id == vm.itemToDelete) {
                    vm.wishService.delete(vm.itemToDelete, onDeleteSuccess, onError);
                    break;
                }
            }
        };

        function onSelectAllSuccess(data) {
            console.log("Wish Service SelectAll() was successful!");
            vm.items = data.items;
            vm.renderWish();
        };

        function onSaveSuccess(data) {
            console.log("Wish Service Save() was successful!");
            vm.selectedItem.id = data.item;
            vm.items.push(vm.selectedItem);
            vm.$scope.$apply(function () {
                vm.selectedItem = null;
            });
            vm.renderWish();
            //render();
        };

        function onUpdateSuccess(data) {
            console.log("Wish Service Update() was successful!");
            var trArray = $('.WishList tr');
            for (var index = 0; index < trArray.length; index++) {
                var id = $(trArray[index]).find('.id').text();
                if (vm.selectedItem.id == parseInt($(trArray[index]).find('.id').text())) {
                    $(trArray[index]).find('.firstName').text(vm.selectedItem.firstName);
                    $(trArray[index]).find('.lastName').text(vm.selectedItem.lastName);
                    $(trArray[index]).find('.middleInitial').text(vm.selectedItem.middleInitial);
                    break;
                }
            }
            vm.$scope.$apply(function () {
                vm.selectedItem = null;
            });
        };

        function onDeleteSuccess(data) {
            console.log("Wish Service Delete() was successful!");
            var tdArray = $('.WishList tr td:first-child');
            for (var index = 0; index < tdArray.length; index++) {
                if (tdArray[index].textContent == vm.itemToDelete) {
                    vm.$scope.$apply(function () {
                        vm.items.splice(index, 1);
                    });
                    break;
                }
            }
            vm.renderWish();
        };

        function onError(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        };
    };

})();