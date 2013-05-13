four51.app.factory('LoginService', function($resource, $window, $451){
	var isAuthenticated = false;
	var service = $resource($451.api('login'));

	return {
		login: function(user) {
			var u = service.save(user);
		},
		confirmed: function(url, user) {
			$451.cache("User", user);
			$window.location.href = '#/' + url ;
		}
	};
});