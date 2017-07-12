(function() {
    function RoomCtrl() {

    }

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as landing',
            templateUrl: '/templates/home.html'
        });

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();