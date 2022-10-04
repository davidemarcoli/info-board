import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../services/category/category.service";
import {AlertService} from "../../../services/alert/alert.service";
import {Category} from "../../../models/category";
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../models/post";

// @ts-ignore
import * as CustomEditor from '@leo1305/ckeditor5-build-custom';

@Component({
  selector: 'app-create-port',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public Editor = CustomEditor;

  // @ts-ignore
  form: FormGroup;

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService, private postService: PostService, private alertService: AlertService) {
    this.categoryService.getCategories().toPromise().then(value => {
      this.categoryList = value || [];
    })

    this.postService.getPosts().toPromise().then(value => {
      console.log(value)
    });
  }

  onCategoryChange(event: any) {
    console.log(event)

    // this.form.patchValue({
    //   categories: event
    // })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      categories: new FormControl([], Validators.required)
    });
  }

  get title() {
    return this.form.get('title');
  }

  get content() {
    return this.form.get('content');
  }

  get categories() {
    return this.form.get('categories');
  }

  onSubmit(event: any) {
    console.log(event)
    console.log(this.form)

    let post = {
      title: this.form.value.title,
      content: this.form.value.content,
      categories: this.form.value.categories.map((id: any) => {
        return {id: id} as Category;
      })
    } as Post;

    this.postService.createPost(post).toPromise().then(value => {
      console.log(value)
      this.alertService.success('Post created successfully');
    })
      .catch(reason => {
        console.log(reason)
        this.alertService.error(reason.error.message);
      });
  };

}
