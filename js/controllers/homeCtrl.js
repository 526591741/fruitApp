app.controller('homeCtrl', ['$scope','listService','$ionicModal','locals', function(scope,list,ionicModal,locals){
	//console.log(1)
  scope.addressShow = locals.getObj('address').title || '北京';

  ionicModal.fromTemplateUrl('/widget/address.html', {
       scope: scope,
       animation: 'slide-in-up'
   }).then(function(address) {
       scope.address = address;
       if(locals.getObj('address').title){
          scope.address.hide();
       }else{
         scope.address.show();
       }
       
   });  

   ionicModal.fromTemplateUrl('/widget/search.html', {
        scope: scope,
        animation: 'slide-in-up'
    }).then(function(search) {
        scope.search = search;
        scope.search.hide()
    });  

      if(list.getData()){
          scope.homedata = list.getData();
          return;
      }

      list.getHttpData(function(res){
      	//console.log(res); ok
      	var data = res.products;
        var cartList = list.getStore() || {};
      	for(var i in data){
      		data[i].num = 0;
          for(var j in cartList){
            if(data[i].name == cartList[j].name){
              data[i].num = cartList[j].num
            }
          }        
      	}
       // console.log(data)
      	list.setData(data);
      	scope.homedata = data;	
      })    

}]);