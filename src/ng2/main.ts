import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platfromRef => {
  const injector = platfromRef.injector;

  const upgrade = injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['myapp'], { strictDi: true });
});
