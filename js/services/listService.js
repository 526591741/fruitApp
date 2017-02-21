app.factory('listService',function($http){
	//console.log(1)

	var nowid = Store('address') || '16642155772dbded02cc22332e4dfdd2';
	var list = $http({
		url:'http://as-vip.missfresh.cn/v3/product/category/hd-fruit?device_id='+ nowid +'&env=web&platform=web&tdk=14865506612006219729&uuid=16642155772dbded02cc22332e4dfdd2&version=2.3.4',
		method:'get',
		params: {

		}  

	});
	var coreData = null; //

	var cartList = {
		//购物车列表
	}

	function Store(nameSpace, data){  //存取缓存数据
		if(data) {
			localStorage.setItem(nameSpace, JSON.stringify(data));
			return;
		}
		return (nameSpace && JSON.parse(localStorage.getItem(nameSpace))) || null;	
	}
	
	return{
		getHttpData:function(callback){
			list.success(callback);
		},
		setData:function(data){
			coreData = data;
		},
		getData:function(){
			return coreData;
		},
		getStore:function(){
			return Store('cartList')
		},
		setCart:function(item ,scope){
			if(item.num !== 0){
				cartList[item.name] = item;		
			}
			if(item.num === 0 && scope.list){
				//console.log(scope.index)
				scope.list.splice(scope.index, 1);
				//console.log(scope.list.length)
				if(scope.list.length==0){
					//console.log('aaa')
					Store('cartList',{});
					return;
				}
			}

			//console.log(cartList)
			Store('cartList',cartList)
		},
		getCart:function(){
			var arr = [];
			if(!coreData) {
				if(Store('cartList')){
					cartList = Store('cartList');
					for(var i in cartList) {
						if(cartList[i].num !== 0) {
							arr.push(cartList[i])
						}
					}
					//console.log(arr)
					return arr;
				}else{
					return false;
				}
				
			}
			for(var i =0; i < coreData.length; i++) {
				if(coreData[i].num !== 0) {
					arr.push(coreData[i])
				}
			}
			return arr; 
		},
		sum:function(){
			var sum = 0,price = 0;
			//console.log(coreData)
			//console.log(cartList)
			for(var i in cartList){
				if(cartList[i].type == 'product'){
					sum += cartList[i].num;
                	price += cartList[i].num*cartList[i].non_vip_price_pro.price_down.price
				}
			}
			//console.log(sum)
			return {
				sum:sum,
				allprice:price
			}
		}
	}

})



