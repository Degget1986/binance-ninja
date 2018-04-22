// from settings.js import EXTRA_BALANCE_COLUMNS, getAllSettings,
// saveSettings, resetSettings.
var app = angular.module('BinanceNinja.Popup', ['ui.bootstrap']);

// Provides settings management in the extension popup.
app.controller('SettingsController', function($scope) {
  // The immutable extra balance column descriptor.
  $scope.EXTRA_BALANCE_COLUMNS = EXTRA_BALANCE_COLUMNS;

  // The global in-memory settings bound to scope.
  $scope.settings = null;

  // Applies the provided settings to the scope.
  function applySettings(settings) {
    $scope.$apply(function() {
      $scope.settings = settings;
    });
  }

  // Resets the settings to default.
  $scope.resetSettings = function() {
    resetSettings(applySettings);
  }

  // Updates the settings (saves them).
  $scope.saveSettings = function() {
    saveSettings();
  }

  // Load settings and apply to scope.
  loadSettings().then(applySettings);
})

