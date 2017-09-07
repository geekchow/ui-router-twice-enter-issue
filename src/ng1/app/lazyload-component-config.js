const path = require('path');

export const config = {
  'home': (resolve) =>
    import(/* webpackChunkName: 'home' */ `${__dirname}/home/home.component.js`)
      .then(resolve),
  'protected': (resolve) =>
    import(/* webpackChunkName: 'protected' */ `${__dirname}/protected/protected.component.js`)
      .then(resolve),
  'test': (resolve) =>
    import(/* webpackChunkName: 'test' */ `${__dirname}/test/test.component.js`)
      .then(resolve),
}
