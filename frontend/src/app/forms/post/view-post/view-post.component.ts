import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../models/post";
import {DomSanitizer} from "@angular/platform-browser";
import {User} from "../../../models/user";
import * as moment from "moment/moment";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: Post = new Post(0, "", "", [], new User("", "", "", ""), new Date(), new Date());

  constructor(private route: ActivatedRoute, private postService: PostService, private sanatizer: DomSanitizer) {
    this.route.queryParams.subscribe(params => {
    this.postService.getPostById(params['id']).toPromise().then(value => {
      this.post = value!;
    });
  });}

  ngOnInit(): void {

  }

  getRelativeDate(date: Date) {
    return moment(date).fromNow();
  }

  getPostContent() {
    return this.sanatizer.bypassSecurityTrustHtml(this.post.content);
  }

}
