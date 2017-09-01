import angular from 'angular';

const appComponent = {
  template: `
    <div class="app-container">
      <button type="button" ng-click="$ctrl.login();">Login</button>
      <button type="button" ng-click="$ctrl.logout();">Logout</button>

      <div ui-view class="app"></div>
    </div>
  `,
  controller: function() {
    const vm = this;

    vm.login = () => {
      window.isAuthenticated = true;
    }

    vm.logout = () => {
      window.isAuthenticated = false;
    }
  }
}

angular.module('myapp-app', [])
  .component('app', appComponent);
