import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'global', pathMatch: 'full'},
  {path: 'countries', loadChildren: './country-list/module/country-list.module#CountryListModule', data: {preload: true}},
  {path: 'global', loadChildren: './global/module/global.module#GlobalModule', data: {preload: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
