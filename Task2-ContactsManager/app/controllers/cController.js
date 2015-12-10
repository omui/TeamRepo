/**
 * @author goldensky
 */
angular.module('cApp').controller('cController',['$scope', '$http', 'cService', function($scope, $http, cService) {
	 cService.loadCustomers(function(data) {
		 $scope.contacts = data.data;
	});
}])