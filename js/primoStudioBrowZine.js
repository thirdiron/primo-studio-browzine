PrimoStudioBrowzineController.$inject = [
  '$scope',
  'primoStudioBrowzineStudioConfig'
];

function isBrowzineLoaded() {
  var validation = false;
  var scripts = document.head.querySelectorAll("script");

  if(scripts) {
    Array.prototype.forEach.call(scripts, function(script) {
      if(script.src.indexOf("browzine-primo-adapter") > -1) {
        validation = true;
      }
    });
  }

  return validation;
};

function PrimoStudioBrowzineController($scope, studioConfig) {
  $onInit = function() {
    window.browzine = {
      api: studioConfig[0].api,
      apiKey: studioConfig[0].apiKey,
      journalCoverImagesEnabled: studioConfig[0].journalCoverImagesEnabled,
      journalBrowZineWebLinkTextEnabled: studioConfig[0].journalBrowZineWebLinkTextEnabled,
      journalBrowZineWebLinkText: studioConfig[0].journalBrowZineWebLinkText,
      articleBrowZineWebLinkTextEnabled: studioConfig[0].articleBrowZineWebLinkTextEnabled,
      articleBrowZineWebLinkText: studioConfig[0].articleBrowZineWebLinkText,
      articlePDFDownloadLinkEnabled: studioConfig[0].articlePDFDownloadLinkEnabled,
      articlePDFDownloadLinkText: studioConfig[0].articlePDFDownloadLinkText,
      printRecordsIntegrationEnabled: studioConfig[0].printRecordsIntegrationEnabled,
    };

    if(!this.isBrowzineLoaded()) {
      window.browzine.script = document.createElement("script");
      window.browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/staging/browzine-primo-adapter.js";
      window.document.head.appendChild(window.browzine.script);
    }
  };

  window.browzine.primo.searchResult($scope);
};

var PrimoStudioBrowzineComponent = {
  selector: 'primoStudioBrowzine',
  controller: PrimoStudioBrowzineController,
  bindings: {parentCtrl: '<'}
};

console.log("BrowZine Update: 1");

var PrimoStudioBrowzineModule = angular
    .module('primoStudioBrowzine', [])
    .component(PrimoStudioBrowzineComponent.selector, PrimoStudioBrowzineComponent).name;

app.requires.push(PrimoStudioBrowzineModule);
