/**
 * @author goldensky
 */
angular.module('cApp').service('cService', function($http) {
	this.loadCustomers = function(success) {
		var respData;
		$http.get("./app/dependencies/MOCK_DATA.json").then(success);
	};
}); 