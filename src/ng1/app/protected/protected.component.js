import angular from 'angular';

const protectedComponent = {
  template: `
    <div class="protected">
      <h1>protected page</h1>

      <nav>
        <ul>
          <li><a ui-sref="home">Go to home page</a></li>
          <li><a ui-sref="test">Go to test</a></li>
          <li><a ui-sref="other-protected">Go to other protected (ng2)</a></li>
        </ul>
      </nav>

    </div>
  `
}

export const module = angular.module('myapp-protected', [])
  .component('protected', protectedComponent);
