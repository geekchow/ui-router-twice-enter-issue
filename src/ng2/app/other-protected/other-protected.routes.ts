import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { OtherProtectedComponent } from './other-protected.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Ng2StateDeclaration[] = [
  {
    name: 'other-protected',
    url: '/other-protected',
    component: OtherProtectedComponent,
  }
];

export const OtherProtectedRoutesModule: ModuleWithProviders = UIRouterModule.forChild({ states: routes });
