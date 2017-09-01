import angular from 'angular';

const testComponent = {
  template: `
    <div class="other-protected">
      <h1>other protected page</h1>

      <a ui-sref="home">Go to home page</a>
      <a ui-sref="protected">Go to protected</a>
    </div>
  `
}

export const module = angular.module('myapp-test', [])
  .component('test', testComponent);
