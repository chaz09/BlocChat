(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

    
// double heck if roommId is available
        Message.send = function(newMessage) {
            messages.push({
            username:$cookies.currentUser,
            content: newMessage,
            sendAt: Date.now(),
            roomId: roomID
        });
        // Send method logic
    };


        return Message;
    }

    angular
        .module('projectChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

//how -Create a controller method that is invoked via ngClick or ngSubmit on the frontend.??!?!?!