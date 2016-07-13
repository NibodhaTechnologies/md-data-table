'use strict';

angular.module('md.data.table').directive('mdTableProgress', mdTableProgress);

function mdTableProgress($templateCache) {

  function postLink(scope, element, attrs, tableCtrl) {
    scope.columnCount = tableCtrl.columnCount;
    scope.deferred = tableCtrl.waitingOnPromise;
  }

  return {
    link: postLink,
    require: '^^mdTable',
    restrict: 'C',
    scope: {},
    template: $templateCache.get('md-table-progress.html')
  };
}