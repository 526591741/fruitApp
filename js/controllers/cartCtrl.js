app.controller('cartCtrl', ['$scope', 'listService',function(scope,list){
       var data = list.getCart();
       //console.log(data);
       
       if(data){
       	    scope.list = data;
			//console.log(scope.list)
			scope.allnum = list.sum().sum ;
			//console.log(scope.allnum)
       	   	scope.$watch('list', function(){
       	 	 	scope.allnum = list.sum().sum ;
       	 	 	scope.allprice = list.sum().allprice;
                 // console.log(scope.list)
       	 	 	
            }, true)

       }else{
       		scope.allnum = 0;
       }

       
       
}]);