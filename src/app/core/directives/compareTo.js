angular.module('proton.core')
.directive('compareTo', () => {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=compareTo'
        },
        link(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = (modelValue) => {
                return modelValue === scope.otherModelValue;
            };

            scope.$watch('otherModelValue', () => {
                ngModel.$validate();
            });
        }
    };
});