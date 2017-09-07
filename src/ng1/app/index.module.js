import angular from 'angular';
import { upgradeModule } from '@uirouter/angular-hybrid';
import ngUiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';
import { config as componentDefinitions } from './lazyload-component-config';

import './app/app.component';
import './services/lazyload/lazyload.service';

const app = angular.module('myapp', [
  upgradeModule.name,
  ngUiRouter,
  oclazyload,

  'myapp-app',
  'myapp.service'
]);

/*************************
 *
 * CONFIG SECTION
 *
 *************************/

const config = (
  $locationProvider,
  $urlRouterProvider,
  $stateProvider,
  $compileProvider,
  $logProvider,
  $ocLazyLoadProvider,
) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.deferIntercept();
  $urlRouterProvider.otherwise('/other-protected');

  $stateProvider.state({
    name: 'home',
    url: '/home',
    component: 'home'
  });

  $stateProvider.state({
    name: 'test',
    url: '/test',
    component: 'test',
    resolve: {
      delay: () => new Promise((resolve) => setTimeout(resolve, 500))
    }
  });

  $stateProvider.state({
    name: 'protected',
    url: '/protected',
    component: 'protected'
  });

  $compileProvider.debugInfoEnabled(true);
  $logProvider.debugEnabled(true);

  $ocLazyLoadProvider.config({
    debug: true,
  });
};

config.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  '$compileProvider',
  '$logProvider',
  '$ocLazyLoadProvider',
];

app.config(config);


/*************************
 *
 * RUN SECTION
 *
 *************************/

const run = (
  $transitions,
  $trace,
) => {
  $transitions.onStart(
    { entering: shouldLazyload },
    lazyloadFiles
  );

  $trace.enable(1);
}

run.$inject = [
  '$transitions',
  '$trace',
];

app.run(run);

function lazyloadFiles(transition) {
  const Lazyload = transition.injector().get('Lazyload');

  const promises = transition.entering()
    .filter(shouldLazyload)
    .map((state) => Lazyload.load(state.name));

  return Promise.all(promises);
}

function shouldLazyload(state) {
  return componentDefinitions[state.name] !== undefined;
}
