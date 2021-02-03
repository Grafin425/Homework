import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PipeComponent} from './components/pipe/pipe.component';
import { BlueDirective } from './components/pipe/blue.directive';
import { BlackDirective } from './components/pipe/black.directive';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'pipe', component: PipeComponent,

  }
];

@NgModule({
  declarations: [UserComponent, UsersComponent, HomeComponent, PipeComponent, BlueDirective, BlackDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
}
