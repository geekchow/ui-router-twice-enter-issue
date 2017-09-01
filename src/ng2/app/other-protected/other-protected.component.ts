import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="other-protected">
      <h1>other protected page</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherProtectedComponent {}
