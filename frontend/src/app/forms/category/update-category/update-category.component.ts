import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category/category.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService, private alertService: AlertService) {
    this.categoryService.getCategories().toPromise().then(value => {
      this.categoryList = value || [];
    })
  }

  onOldCategoryChange(event: any) {
    console.log(event)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      oldCategoryId: new FormControl('', Validators.required),
      newCategoryName: new FormControl('', Validators.required)
    });
  }

  get oldCategoryId() {
    return this.form.get('oldCategoryId');
  }

  get newCategoryName() {
    return this.form.get('newCategoryName');
  }

  onSubmit() {

    // @ts-ignore
    this.categoryService.deleteCategory(this.oldCategoryId.value, this.newCategoryName.value).toPromise().then(value => {
    })
  }

}
