import { Inject, Injectable, Injector, Optional, InjectionToken } from '@angular/core';
import { StateDeclaration } from '@uirouter/angular';
import { HookMatchCriteria, Transition, TransitionService } from '@uirouter/core';
import * as minimatch from 'minimatch';
import { IsAuthenticatedService } from '../../services/is-authenticated/is-authenticated.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const REQUIRE_AUTHENTICATION_GUARD_OPTIONS =
  new InjectionToken<any>('require-authentication-guard-options');

@Injectable()
export class RequireAuthenticationGuard {

  constructor(
    private injector: Injector,
    private isAuthenticatedService: IsAuthenticatedService,
    @Optional() @Inject(REQUIRE_AUTHENTICATION_GUARD_OPTIONS) private options: any,
  ) {}

  public guard() {
    this.getTransitionService().onBefore(
      this.criteria(),
      this.redirectToHome.bind(this)
    );
  }

  private criteria(): HookMatchCriteria {
    return {
      entering: (state: StateDeclaration) => {
        return !this.isPublicState(state);
      }
    };
  }

  private redirectToHome($transition$: Transition, state: any): Promise<boolean> {
    return this.isAuthenticatedService.check$()
      .map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        }

        $transition$.router.stateService.transitionTo('home');
        return false;
      })
      .toPromise();
  }

  private getTransitionService() {
    return this.injector.get(TransitionService);
  }

  private isPublicState(state: StateDeclaration): boolean {
    const match = this.getPublicStatesFromOptions().filter((publicState) => {
      return minimatch(state.name, publicState);
    });

    return match.length > 0;
  }

  private getPublicStatesFromOptions(): string[] {
    return this.options.publicStates || [];
  }

}
