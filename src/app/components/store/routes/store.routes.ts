module inventoryApp.Store {
    'use strict';

   class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('product', {
              url: '/product',
              templateUrl: 'app/components/product/views/product-list.html',
              controller: inventoryApp.store.ProductListController,
              controllerAs: 'vm'
            });
        }
    }
    angular.module('inventoryApp').config(RouterConfig);
}
