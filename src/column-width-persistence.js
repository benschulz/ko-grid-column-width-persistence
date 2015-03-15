'use strict';

var columnSizing = 'ko-grid-column-sizing';
var viewStateStorage = 'ko-grid-view-state-storage';

define(['module', 'onefold-js', 'ko-grid', viewStateStorage, columnSizing], function (module, js, koGrid) {
    var extensionId = module.id.indexOf('/') < 0 ? module.id : module.id.substring(0, module.id.indexOf('/'));

    koGrid.defineExtension(extensionId, {
        dependencies: [viewStateStorage, columnSizing],
        Constructor: function ColumnWidthPersistenceExtension(bindingValue, config, grid) {
            var self = this;

            var modeDependentStorage = grid.extensions[viewStateStorage].modeDependent;
            var isResizable = grid.extensions[columnSizing].isResizable;

            var boundOrNonResizable = {};
            var bindWidthsOf = columns => columns
                .filter(c => !js.objects.hasOwn(boundOrNonResizable, c.key))
                .forEach(c => {
                    boundOrNonResizable[c.key] = true;
                    if (isResizable(c))
                        modeDependentStorage.bind('column[' + c.id + '].width', c.width);
                });

            var subscription = grid.columns.all.subscribe(bindWidthsOf);
            bindWidthsOf(grid.columns.all());

            self.dispose = function () {
                subscription.dispose();
            };

        }
    });

    return koGrid.declareExtensionAlias('columnWidthPersistence', extensionId);
});
