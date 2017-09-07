import angular from 'angular';

const homeComponent = {
  template: `
    <div class="home">
      <h1>home page</h1>

      <nav>
        <ul>
          <li><a href="" ng-click="$ctrl.goToTestState()">Go to test</a></li>
          <li><a ui-sref="protected">Go to protected page</a></li>
          <li><a ui-sref="other-protected">Go to other protected (ng2)</a></li>
        </ul>
      </nav>

    </div>
  `,
  controller: function($state) {
    const vm = this;

    vm.goToTestState = () => {
      console.error('TRANSITION TO TEST STATE');
      $state.go('test');
    }

  }
}

homeComponent.controller.$inject = ['$state'];

export const module = angular.module('myapp-home', [])
  .component('home', homeComponent);
