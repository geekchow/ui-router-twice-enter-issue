import angular from 'angular';

const testComponent = {
  template: `
    <div class="other-protected">
      <h1>test child2 page</h1>

      <nav>
        <ul>
          <li><a ng-click="$ctrl.goToTestState()">Go to test 1 page</a></li>
        </ul>

        <div ng-repeat="i in $ctrl.list">{{i}}</div>
      </nav>

    </div>
  `,
  controller: function($state) {
    const vm = this;

    this.$onInit = function() {
      vm.list = [];
      for(var i = 0; i< 1000; i++ ) { 
        vm.list.push('test 2 it is a very looooooooooooooooog name' + i);
      }
      console.log('init the test2');
    };

    vm.goToTestState = () => {
      console.error('TRANSITION TO TEST STATE 1', Date.now());
      $state.go('test.test1');
    }

  }
}

testComponent.controller.$inject = ['$state'];

export const module = angular.module('myapp-test2', [])
  .component('test2', testComponent);
