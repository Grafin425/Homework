import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.data.subscribe(value => this.posts = value.postsData));
  }

  ngOnInit(): void {
  }

}
