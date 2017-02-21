app.controller('brandCtrl', ['$scope','$http' ,function(scope,http){

	
    http({
    		url:'http://as-vip.missfresh.cn/v3/product/category/PPT-HBNH1?type=1&device_id=16642155772dbded02cc22332e4dfdd2&env=web&platform=web&tdk=148662679727385831781&uuid=16642155772dbded02cc22332e4dfdd2&version=2.3.4',
    		method:'get',
    		params: {

    		}  
    	}).success(function(res){
    		//console.log(res)
    		scope.list = res.products;

    	})
}]);