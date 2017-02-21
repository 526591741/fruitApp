app.directive('singleCart',function(listService){
	return{
		restrict: 'E',
		link:function(scope,ele,attr){
			//console.log(1)
			
			scope.$watch('item', function(newvalue, oldvalue){
				//console.log(scope.list)
				//console.log(scope.item.num)
				//if(scope.list)
				listService.setCart(newvalue,scope);	//设置数据中心的购物车列表， 并且进行本地缓存
			}, true)
		},
		templateUrl: '../widget/cart.html',
		replace:true,
		scope:{
			item:'=item',
			list:'=list',
			index:'=index'
		}
	}
})