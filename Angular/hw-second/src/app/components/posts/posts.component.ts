import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postServices: PostService) {
  }

  ngOnInit(): void {
    this.postServices.getAllPosts().subscribe(value => this.posts = value);
  }

}
