import { config as componentDefinitions } from '../../lazyload-component-config';

const LazyloadService = function($ocLazyLoad) {

  this.load = function(name) {
    return this.loadFileFromDevice(name)
      .then(this.injectInAngular);
  }

  this.loadFileFromDevice = function(name) {
    const callbacks = {};
    const promise = new Promise((resolve, reject) => {
      callbacks.resolve = resolve;
      callbacks.reject = reject;
    });

    if(!componentDefinitions[name]) {
      return callbacks.reject(`The ${name} is not defined and can't be lazyloaded`);
    }

    componentDefinitions[name](callbacks.resolve);

    return promise;
  }

  this.injectInAngular = function (module) {
    return $ocLazyLoad.inject(module.module.name);
  }
}

LazyloadService.$inject = ['$ocLazyLoad'];

angular.module('myapp.service', [])
  .service('Lazyload', LazyloadService);
