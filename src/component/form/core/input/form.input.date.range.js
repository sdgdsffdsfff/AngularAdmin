//-----------------------------------------------------------------------------------------------
//
//
//  针对input的封装
//
//
//-----------------------------------------------------------------------------------------------
angular.module('admin.component')
    .directive('uiFormDateRange', function (uiDateRangeService, componentHelper, defaultCol) {
        return {
            restrict: 'E',
            replace: true,
            link: function (scope, element, attrs) {
                //
                var inputDate = uiDateRangeService(element, attrs);
                componentHelper.tiggerComplete(scope, attrs.ref || '$formDateRange', inputDate);

                //
                scope.$on('uiform.reset', function () {
                    inputDate.reset();
                });

                //
                element.removeAttr('name').removeAttr('model');
            },
            template: function (element, attrs) {
                var cc = (attrs.col || defaultCol).split(':');
                return componentHelper.getTemplate('tpl.form.input.daterange', $.extend({
                    leftCol: cc[0],
                    rightCol: cc[1]
                }, attrs));
            }
        };
    });