import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {FullPostComponent} from './components/full-post/full-post.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent
  },
  {
    path: ':id', component: FullPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
