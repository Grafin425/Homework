import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  exports: [HttpClientModule],
  imports: [
    HttpClientModule,
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostService]
})
export class PostsModule {
}
