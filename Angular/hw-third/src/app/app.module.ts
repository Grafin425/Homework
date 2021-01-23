import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FullUserComponent} from './full-user/full-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent,
    },
      {
        path: 'link/cars', component: CarsComponent, children: [{
          path: ':id', component: FullUserComponent
        }]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
