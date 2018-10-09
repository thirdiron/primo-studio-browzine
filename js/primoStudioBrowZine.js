PrimoStudioBrowzineController.$inject = [
  'angularLoad',
  'primoStudioBrowzineStudioConfig',
  '$http',
  '$scope',
  '$element',
  '$timeout',
  '$window'
];

function PrimoStudioBrowzineController(angularLoad, studioConfig, $http, $scope, $element, $timeout, $window) {
  $onInit = function() {

  };

  $onDestroy = function() {

  };
};

var PrimoStudioBrowzineComponent = {
  selector: 'primoStudioBrowzine',
  controller: PrimoStudioBrowzineController,
  bindings: {parentCtrl: '<'}
};

var PrimoStudioBrowzineModule = angular
    .module('primoStudioBrowzine', [])
    .component(PrimoStudioBrowzineComponent.selector, PrimoStudioBrowzineComponent);

app.requires.push(PrimoStudioBrowzineModule);
