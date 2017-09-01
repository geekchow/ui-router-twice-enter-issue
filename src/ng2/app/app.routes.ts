import { ModuleWithProviders } from '@angular/core';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';

export const routes: Ng2StateDeclaration[] = [
  {
    name: 'other-protected.**',
    url: '/other-protected',
    loadChildren: './other-protected/other-protected.module#OtherProtectedModule',
  }
];

export const AppRoutesModule: ModuleWithProviders = UIRouterModule.forChild({ states: routes });
