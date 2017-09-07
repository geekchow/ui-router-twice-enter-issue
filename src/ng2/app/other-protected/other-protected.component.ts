import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="other-protected">
      <h1>other protected page (ng2)</h1>

      <nav>
        <ul>
          <li><a uiSref="home">Go to home page</a></li>
          <li><a uiSref="test">Go to test</a></li>
          <li><a uiSref="protected">Go to protected page</a></li>
        </ul>
      </nav>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherProtectedComponent {}
