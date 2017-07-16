(function() {
    function HomeCtrl(Room) {
  

        this.rooms = Room.all

    };

    angular
        .module('projectChat')
        .controller('HomeCtrl', ['Room', RoomCtrl]);
})();
