import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor(private authS: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any | boolean {
    if (this.authS.authState) return true;

    return this.authS.currentUserObservable().onAuthStateChanged((user) => {
      if (user === null) {
        this.route.navigate([
          '/auth',
          { queryParams: 'Error authentification' },
        ]);
      } else {
        this.route.navigate([
          '/dashboard',
          { queryParams: 'Dahsboard welcome !' },
        ]);
      }
    });
  }
}
