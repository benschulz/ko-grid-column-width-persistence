/*
 * Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
define(['onefold-dom', 'indexed-list', 'onefold-lists', 'onefold-js', 'ko-grid-column-sizing', 'ko-grid-view-state-storage', 'ko-data-source', 'ko-indexed-repeat', 'ko-grid-view-modes', 'knockout', 'ko-grid'],    function(onefold_dom, indexed_list, onefold_lists, onefold_js, ko_grid_column_sizing, ko_grid_view_state_storage, ko_data_source, ko_indexed_repeat, ko_grid_view_modes, knockout, ko_grid) {
var ko_grid_column_width_persistence_column_width_persistence, ko_grid_column_width_persistence;

var columnSizing = 'ko-grid-column-sizing';
var viewStateStorage = 'ko-grid-view-state-storage';
ko_grid_column_width_persistence_column_width_persistence = function (module, js, koGrid) {
  var extensionId = 'ko-grid-column-width-persistence'.indexOf('/') < 0 ? 'ko-grid-column-width-persistence' : 'ko-grid-column-width-persistence'.substring(0, 'ko-grid-column-width-persistence'.indexOf('/'));
  koGrid.defineExtension(extensionId, {
    dependencies: [
      viewStateStorage,
      columnSizing
    ],
    Constructor: function ColumnWidthPersistenceExtension(bindingValue, config, grid) {
      var self = this;
      var modeDependentStorage = grid.extensions[viewStateStorage].modeDependent;
      var isResizable = grid.extensions[columnSizing].isResizable;
      var boundOrNonResizable = {};
      var bindWidthsOf = function (columns) {
        return columns.filter(function (c) {
          return !js.objects.hasOwn(boundOrNonResizable, c.key);
        }).forEach(function (c) {
          boundOrNonResizable[c.key] = true;
          if (isResizable(c))
            modeDependentStorage.bind('column[' + c.id + '].width', c.width);
        });
      };
      var subscription = grid.columns.all.subscribe(bindWidthsOf);
      bindWidthsOf(grid.columns.all());
      self.dispose = function () {
        subscription.dispose();
      };
    }
  });
  return koGrid.declareExtensionAlias('columnWidthPersistence', extensionId);
}({}, onefold_js, ko_grid);
ko_grid_column_width_persistence = function (main) {
  return main;
}(ko_grid_column_width_persistence_column_width_persistence);return ko_grid_column_width_persistence;
});