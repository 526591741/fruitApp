app.controller('mineCtrl', ['$scope','$ionicModal', function(scope,ionicModal){

	//声明弹窗
     ionicModal.fromTemplateUrl('/widget/login.html', {
         scope: scope,
         animation: 'slide-in-up'
     }).then(function(modal){
         scope.modal = modal;
         scope.modal.show(); //展示对话框
     });
}]);