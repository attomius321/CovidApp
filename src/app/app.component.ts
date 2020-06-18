import {Component, Inject} from '@angular/core';
import {INavigationService, NAVIGATION_SERVICE} from './services/navigation-service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidApp';

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  goToGlobal() {
    this.navigationService.openGlobal();
  }

  goToCountry(){
    this.navigationService.openCountries();
  }
}
