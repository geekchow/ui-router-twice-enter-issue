import angular from 'angular';

const homeComponent = {
  template: `
    <div class="home">
      <h1>home page</h1>

      <a ui-sref="protected">Go to protected page</a>
    </div>
  `,
}

export const module = angular.module('myapp-home', [])
  .component('home', homeComponent);
