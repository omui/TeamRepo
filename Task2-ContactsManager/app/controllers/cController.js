/**
 * @author goldensky
 */
angular.module('cApp').controller('cController', function($scope, cService) {
	$scope.contacts = cService.loadCustomers();
})