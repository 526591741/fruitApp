app.controller('searchCtrl', ['$scope','$ionicModal','$http','locals', function(scope,ionicModal,http,locals){
    
    scope.hide = function(){
    	scope.search.hide()
    }
    scope.product = function(data){

    }
	scope.user = {}
	scope.$watch('user.searchtx',function(val,old){
		//console.log(123)
		http({
       	 url:'http://as-vip.missfresh.cn/search/hint/?device_id=7e0c39c1d29a013bf04b07fb9ed3e76a&env=web&kw='+ val +'&platform=web&tdk=14867125075976588122&uuid=7e0c39c1d29a013bf04b07fb9ed3e76a&version=2.3.4',
       	 method:'get',
		 params: {
		}  
	}).success(function(res){
		scope.product = res.data;
		//console.log(scope.product)
	})
	},true)


}]);

