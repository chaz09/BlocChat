(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    	$uibModal.open({
    		templateUrl: '/templates/modaluser.html',
    		controller: 'ModalCtrl as modal'
      // Do something to allow users to set their username
    };
  }

  angular
    .module('projectChat')
    .run(['$cookies', BlocChatCookies]);
})();