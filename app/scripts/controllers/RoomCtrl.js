(function() {
    function RoomCtrl() {

    }

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        });

    angular
        .module('projectChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();