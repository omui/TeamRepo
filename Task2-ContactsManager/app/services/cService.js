/**
 * @author goldensky
 */
angular.module('cApp').service('cService', function($http) {
	this.loadCustomers = function() {
		$http.get("./app/dependencies/MOCK_DATA.json").then(function(response) {
			console.log(response.data);
			return response.data;
		});
	};
});