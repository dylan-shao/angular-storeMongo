(function(){
	angular.module('app', [])
		.controller('Ctrl', function($scope,$http){
			$scope.addC1 = function(nc1){
				$http.post('/api/c1', nc1)
					.then(function(data){
						$scope.c1s.push(data.data);
					})
			}		
			$http.get('/api/c1')
				.then(function(resp){
					$scope.c1s = resp.data;
				})
					
				
		})
})();