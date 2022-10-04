import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../models/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getPosts().toPromise().then(value => {
      this.posts = value || [];
    })
  }

  navigateToPost(id: number) {
    this.router.navigate(['/post/view'], {queryParams: {id: id}});
  }

  ngOnInit(): void {
  }

}
