import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {PostsResolveService} from './services/posts-resolve.service';

const routes: Routes = [
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostsResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]
  },
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
    UsersComponent
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
