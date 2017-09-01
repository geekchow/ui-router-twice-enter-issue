import { Injectable, Injector } from '@angular/core';
import { UrlService } from '@uirouter/core';

@Injectable()
export class StartRouterService {

  constructor(
    private injector: Injector,
  ) {}

  public start() {
    this.getUrlService().listen();
    this.getUrlService().sync();
  }

  private getUrlService() {
    return this.injector.get(UrlService);
  }
}
