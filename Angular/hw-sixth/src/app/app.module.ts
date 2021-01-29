import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)

  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
