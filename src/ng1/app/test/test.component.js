import angular from 'angular';

const testComponent = {
  template: `
    <div class="other-protected">
      <h1>test page</h1>

      <nav>
        <ul>
          <li><a ui-sref="home">Go to home page</a></li>
          <li><a ui-sref="protected">Go to protected page</a></li>
          <li><a ui-sref="other-protected">Go to other Protected (ng2)</a></li>
          <li><a ui-sref="test.test1">Go to test1 page</a></li>
          <li><a ui-sref="test.test2">Go to test2 page</a></li>
        </ul>
      </nav>

      <div ui-view id="test-container"></div>

    </div>
  `
}

export const module = angular.module('myapp-test', [])
  .component('test', testComponent);
