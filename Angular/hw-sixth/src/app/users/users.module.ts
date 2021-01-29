import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { FullUserComponent } from './components/full-user/full-user.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    UsersRoutingModule,
  ],
  exports: [HttpClientModule],
  providers: [UsersService]
})
export class UsersModule {
}
