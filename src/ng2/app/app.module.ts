import { AppRoutesModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  Injector,
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
  } from '@angular/core';
import { IsAuthenticatedService } from './services/is-authenticated/is-authenticated.service';
import { REQUIRE_AUTHENTICATION_GUARD_OPTIONS, RequireAuthenticationGuard } from './guards/require-authentication/require-authentication.guard';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UpgradeModule } from '@angular/upgrade/static';
import { UrlService } from '@uirouter/core';
import { StartRouterService } from './services/start-router/start-router.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    UIRouterUpgradeModule,

    AppRoutesModule,
  ],
  providers: [
    RequireAuthenticationGuard,
    IsAuthenticatedService,
    StartRouterService,
    {
      provide: REQUIRE_AUTHENTICATION_GUARD_OPTIONS,
      useValue: {
        publicStates: [
          'home*',
          'test*',
        ]
      }
    },
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
  ]
})
export class AppModule {

  constructor(
    private requireAuthenticationGuard: RequireAuthenticationGuard,
    private startRouterService: StartRouterService,
  ) {}

  ngDoBootstrap() {
    (window as any).isAuthenticated = false;

    // simulate bootstrap delay
    setTimeout(() => {
      this.requireAuthenticationGuard.guard();

      this.startRouterService.start();
    });
  }

}
