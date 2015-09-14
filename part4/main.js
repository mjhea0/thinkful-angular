var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);

  bitcoinCalculator.controller('bitcoinController', function($scope, $http){

    // calling the api, grabbing the value for USD, appending it to the dom
    $http.get("https://bitpay.com/api/rates")
    .success(function(data){
      $scope.rates = data;
      for(var i=0;i<data.length;i++){
        if (data[i].code == "USD"){
          $scope.currRate = data[i].rate;
        }
      }
      $scope.initalAmt = 5000;
      $scope.newAmt= function(price){
        return price/$scope.currRate * $scope.initalAmt;
      };
      $scope.profit = function(price){
        return price/$scope.currRate * $scope.initalAmt - $scope.initalAmt;
      };
    });

    $scope.exampleData = [{
      "key": "Quantity",
      "bar": true,
      "values": [
        [10, 20],
        [20, 40],
        [30, 60],
        [40, 80],
        [50, 100]
      ]
    }];

  });
