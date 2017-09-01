import { NgModule } from '@angular/core';
import { OtherProtectedComponent } from './other-protected.component';
import { OtherProtectedRoutesModule } from './other-protected.routes';

@NgModule({
  declarations: [
    OtherProtectedComponent,
  ],
  imports: [
    OtherProtectedRoutesModule,
  ]
})
export class OtherProtectedModule {}
