import {Injectable, InjectionToken, Provider} from '@angular/core';
import {Router} from '@angular/router';

export interface INavigationService {
  openCountries(): Promise<boolean>;
  openGlobal(): Promise<boolean>;
}

export const NAVIGATION_SERVICE = new InjectionToken<INavigationService>("NAV_SERVICE");

@Injectable()
export class NavigationService implements INavigationService{

  constructor(private router: Router) {

  }

  openCountries(): Promise<boolean> {
    return this.router.navigate(['countries']);
  }

  openGlobal(): Promise<boolean> {
    return this.router.navigate(['global']);
  }
}

export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
}
