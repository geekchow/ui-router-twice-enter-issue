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
  'test.test1': (resolve) =>
  import(/* webpackChunkName: 'test1' */ `${__dirname}/test/testChild1/test1.component.js`)
    .then(resolve),
  'test.test2': (resolve) =>
  import(/* webpackChunkName: 'test2' */ `${__dirname}/test/testChild2/test2.component.js`)
    .then(resolve),
}
