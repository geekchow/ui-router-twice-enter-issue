import angular from 'angular';

const protectedComponent = {
  template: `
    <div class="protected">
      <h1>protected page</h1>

      <a ui-sref="home">Go to home page</a>
      <a ui-sref="test">Go to test</a>
    </div>
  `
}

export const module = angular.module('myapp-protected', [])
  .component('protected', protectedComponent);
