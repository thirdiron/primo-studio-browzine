PrimoStudioBrowzineController.$inject = [
  "$scope",
  "primoStudioBrowzineStudioConfig"
];

function isBrowzineLoaded() {
  var validation = false;
  var scripts = document.head.querySelectorAll("script");

  if (scripts) {
    Array.prototype.forEach.call(scripts, function (script) {
      if (script.src.indexOf("browzine-primo-adapter") > -1) {
        validation = true;
      }
    });
  }

  return validation;
};

function PrimoStudioBrowzineController($scope, studioConfig) {
  if (!isBrowzineLoaded()) {
    if (studioConfig[0]) {
      if (!studioConfig[0].libraryId) {
        console.log("Missing required Primo Studio BrowZine addon field: libraryId");
      }

      if (!studioConfig[0].apiKey) {
        console.log("Missing required Primo Studio BrowZine addon field: apiKey");
      }
    } else {
      console.log("Missing Primo Studio BrowZine addon configuration: studioConfig");
    }

    window.browzine = {
      libraryId: studioConfig[0].libraryId,
      apiKey: studioConfig[0].apiKey,
      journalCoverImagesEnabled: studioConfig[0].journalCoverImagesEnabled,
      journalBrowZineWebLinkTextEnabled: studioConfig[0].journalBrowZineWebLinkTextEnabled,
      journalBrowZineWebLinkText: studioConfig[0].journalBrowZineWebLinkText,
      articleBrowZineWebLinkTextEnabled: studioConfig[0].articleBrowZineWebLinkTextEnabled,
      articleBrowZineWebLinkText: studioConfig[0].articleBrowZineWebLinkText,
      articlePDFDownloadLinkEnabled: studioConfig[0].articlePDFDownloadLinkEnabled,
      articlePDFDownloadLinkText: studioConfig[0].articlePDFDownloadLinkText,
      printRecordsIntegrationEnabled: studioConfig[0].printRecordsIntegrationEnabled
    };

    window.browzine.script = document.createElement("script");
    window.browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/staging/browzine-primo-adapter.js";
    window.document.head.appendChild(window.browzine.script);
  }

  (function poll() {
    if(isBrowzineLoaded() && window.browzine.primo) {
      window.browzine.primo.searchResult($scope);
    } else {
      requestAnimationFrame(poll);
    }
  })();
};

var PrimoStudioBrowzineComponent = {
  selector: "primoStudioBrowzine",
  controller: PrimoStudioBrowzineController,
  bindings: {parentCtrl: "<"}
};

var PrimoStudioBrowzineModule = angular
    .module("primoStudioBrowzine", [])
    .component(PrimoStudioBrowzineComponent.selector, PrimoStudioBrowzineComponent).name;

app.requires.push(PrimoStudioBrowzineModule);
