app.directive('tabList', ['listService',function(listService){
	return {
		restrict: 'E', 
		link: function(scope, element, atrr){
			//console.log(listService)
			
           	scope.sum = function(){  //计算购物车总数量
           		//console.log(listService.sum())
           		return listService.sum().sum
           	}

			scope.getStatus = function(index){
				for(var i=0; i < scope.list.length; i++) {
					scope.list[i].active = false;
				}
				scope.list[index].active = true;
			}
			scope.list = [{
				link: '#/home',
				icon: 'ion-home',
				name: '首页',
				active: false
			},{
				link: '#/brand',
				icon: 'ion-star',
				name: '品牌团',
				active: false
			},{
				link: '#/cart',
				icon: 'ion-android-cart',
				name: '购物车',
				active: false
			},{
				link: '#/mine',
				icon: 'ion-person',
				name: '我的',
				active: false
			}]
			for(var i in scope.list){
				if(scope.list[i].link == location.hash){
					scope.list[i].active = true;
				}
			}
			
		},
		templateUrl: '/widget/tab.html',
		replace: true,
		scope: {
			//与外界作用域独立
		}
	}	 	
}])