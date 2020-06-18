import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CountryListModule} from './country-list/module/country-list.module';
import {GlobalModule} from './global/module/global.module';
import {NavigationServiceProvider} from './services/navigation-service/navigation.service';
import {PreloadSelectedModulesService} from './services/preload-service/preload-selected-modules.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CountryListModule,
        GlobalModule
    ],
    providers: [NavigationServiceProvider, PreloadSelectedModulesService],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
