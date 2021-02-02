import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
