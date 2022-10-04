import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../models/post";
import {Router} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];
  searchedPosts: { post: Post, importance: number }[] = [];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getPosts().toPromise().then(value => {
      this.posts = value || [];
      this.search()
    })
  }

  navigateToPost(id: number) {
    this.router.navigate(['/post/view'], {queryParams: {id: id}});
  }

  getRelativeDate(date: Date) {
    return moment(date).fromNow();
  }

  search(event?: any) {
    if (event) {
      const searchTerm = event.data.toUpperCase();
      console.log(event)

      const newSearchedPosts = [];

      this.posts.forEach(post => {
        const isInCategories = post.categories.filter(category => {
          return category.name.toUpperCase().includes(searchTerm)
        }).length > 0;
        const isInTitle = post.title.toUpperCase().includes(searchTerm)
        if (isInTitle) newSearchedPosts.push({post: post, importance: 3})
        if (isInCategories) newSearchedPosts.push({post: post, importance: 2})
        // const isInContent = true;
      })
    } else {
      this.searchedPosts = this.posts.map(value => {
        return {post: value, importance: 3}
      });
    }
  }

  ngOnInit(): void {
  }

}
