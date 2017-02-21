app.controller('addressCtrl', ['$scope','$ionicModal','$http','locals', function(scope,ionicModal,http,locals){
    
       scope.hide = function(){
       		scope.address.hide()
       }
       scope.city = locals.getObj('address').city || '北京';
		//scope.type = 'city';
       scope.select = function(city){
       		scope.city = city;
       		scope.type = 'search';
       		console.log(scope.type)
       }
       scope.selectAddress = function(address){
       		locals.setObj('address',address)
       		location.reload()
       }
    http({
       	 url:'http://as-vip.missfresh.cn/v2/address/list?device_id=7e0c39c1d29a013bf04b07fb9ed3e76a&env=web&platform=web&tdk=148669120041668425971&uuid=7e0c39c1d29a013bf04b07fb9ed3e76a&version=2.3.4',
       	 method:'get',
		 params: {
		}  
	}).success(function(res){
		scope.citylist = res;
	})
	//console.log(scope.address)
	scope.user = {
	}
	scope.$watch('user.searchtx', function(newvalue,oldvalue){
		//console.log(newvalue); 	
		http.jsonp("http://apis.map.qq.com/ws/place/v1/suggestion?callback=JSON_CALLBACK&device_id=7e0c39c1d29a013bf04b07fb9ed3e76a&env=web&key=IBKBZ-EWKH4-AZZUL-DAOBQ-HBWP2-JJFD7&keyword="+ newvalue +"&output=jsonp&platform=web&policy=1&region="+scope.city+"&region_fix=1&tdk=148669120041668425971&timeout=5000&uuid=7e0c39c1d29a013bf04b07fb9ed3e76a&version=2.3.4").success(function(data){ 
			//console.log(data)
		　　scope.addressList = data.data
		});
	},true)


}]);
