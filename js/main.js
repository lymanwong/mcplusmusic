angular.module('ngToggle', [])
    .controller('AppCtrl',['$scope', function($scope){
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
}]);

var app = angular.module('mcplusmusic',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.php',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'partials/about.php',
      controller: 'AboutController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.php',
      controller: 'BioController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.php',
      controller: 'ContactController'
    })
    .when('/gallery', {
      templateUrl: 'partials/gallery.php',
      controller: 'GalleryController'
    })
    .when('/music', {
      templateUrl: 'partials/music.php',
      controller: 'MusicController'
    })
    .when('/testimonials', {
      templateUrl: 'partials/testimonials.php',
      controller: 'TestimonialsController'
    })
    .otherwise ({
      redirectTo: '/'
    })
});

app.controller('HomeController', function($scope){
  $scope.pageClass = 'home';
});

app.controller('AboutController', function($scope){
  $scope.pageClass = 'about';
});

app.controller('BioController', function($scope){
  $scope.pageClass = 'bio';
});

app.controller('ContactController', function($scope){
  $scope.pageClass = 'contact';
});

app.controller('GalleryController', function($scope){
  $scope.pageClass = 'gallery';
});

app.controller('MusicController', function($scope){
  $scope.pageClass = 'music';
});

app.controller('TestimonialsController', function($scope){
  $scope.pageClass = 'testimonials';
});
