primoStudioBrowzineController.$inject = [
  'angularLoad',
  'primoStudioBrowzineStudioConfig',
  '$http',
  '$scope',
  '$element',
  '$timeout',
  '$window'
];

function primoStudioBrowzineController(angularLoad, studioConfig, $http, $scope, $element, $timeout, $window) {
  $onInit = function() {

  };

  $onDestroy = function() {

  };
};

var primoStudioBrowzineComponent = {
    selector: 'primoStudioBrowzine',
    controller: primoStudioBrowzineController,
    bindings: {parentCtrl: '<'}
};

var primoStudioBrowzineModule = angular
    .module('primoStudioBrowzine', [])
    .component(primoStudioBrowzineComponent.selector, primoStudioBrowzineComponent);

app.requires.push(primoStudioBrowzineModule);
