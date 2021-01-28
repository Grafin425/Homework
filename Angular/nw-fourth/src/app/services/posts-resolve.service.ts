import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Post} from '../models/Post';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private postsService: PostsService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postsService.getPosts();
  }

}
