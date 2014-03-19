angular.module('bitcalc',[])


//add $locale
.controller('btcRates', function($scope, $http){
   
   $http.get("https://bitpay.com/api/rates")
       .success(function(data){
       	$scope.rates = data;
       	for(var i=0;i<data.length;i++){
    	    if (data[i].code == "USD"){
    	       $scope.currBTC = data[i].rate;
       }
   }
   $scope.startAmt = 5;
   $scope.newAmt = function(price){
   	                return price/$scope.currBTC * $scope.startAmt;
   }
   $scope.profit = function(price){
   	                return price/$scope.currBTC * $scope.startAmt - $scope.startAmt; 
   $scope.percent = function(price){
   	                 return (price - $scope.currBTC)/$scope.currBTC;
   }

   }
});
              

    $scope.prices = [
          {usd:1000},
          {usd:2000},
          {usd:5000},
          {usd:10000},
          {usd:25000},
          {usd:50000},
          {usd:100000},
          {usd:250000},
          {usd:500000},
          {usd:1000000}];

});
