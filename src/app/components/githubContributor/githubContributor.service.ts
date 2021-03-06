module inventoryApp {
  'use strict';

  export class GithubContributor {
    public apiHost: string = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

    private $log: angular.ILogService;
    private $http: angular.IHttpService;

    /** @ngInject */
    constructor($log: angular.ILogService, $http: angular.IHttpService) {
      this.$log = $log;
      this.$http = $http;
    }

    getContributors(limit: number = 30) {
      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
        .then((response: any) => {
          return response.data;
        })
        .catch((error: any) => {
          this.$log.error('XHR Failed for getContributors.\n', error.data);
        });
    }
  }
}
