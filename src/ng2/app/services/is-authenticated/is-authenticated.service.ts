import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class IsAuthenticatedService {

  check$(): Observable<boolean> {
    return of((window as any).isAuthenticated === true);
  }

}
