export const config = {
  'home': (resolve) =>
    import(/* webpackChunkName: 'home' */ '/Users/jonathan/Projects/ui-router-issue/src/ng1/app/home/home.component.js')
      .then(resolve),
  'protected': (resolve) =>
    import(/* webpackChunkName: 'protected' */ '/Users/jonathan/Projects/ui-router-issue/src/ng1/app/protected/protected.component.js')
      .then(resolve),
  'test': (resolve) =>
    import(/* webpackChunkName: 'test' */ '/Users/jonathan/Projects/ui-router-issue/src/ng1/app/test/test.component.js')
      .then(resolve),
}
