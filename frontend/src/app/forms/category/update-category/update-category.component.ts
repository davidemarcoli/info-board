import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category/category.service";
import {AlertService} from "../../../services/alert/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  // @ts-ignore
  public form: FormGroup;

  public oldCategory: Category | undefined;

  color = '';

  categoryList: Category[] = [];


  constructor(private categoryService: CategoryService, private alertService: AlertService, private router: Router) {
    this.categoryService.getCategories().toPromise().then(value => {
      this.categoryList = value || [];
    })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      oldCategory: new FormControl(undefined, Validators.required),
      name: new FormControl('', Validators.required)
    });

    this.form.get('oldCategory')?.valueChanges.subscribe(value => {
      console.log(value);
      this.oldCategory = value;
      this.form.patchValue({
        name: value.name,
      })
      this.color = value.color;

    });
  }

  get oldCategoryId() {
    return this.form.get('oldCategoryId');
  }

  get name() {
    return this.form.get('name');
  }

  getPreviewCategory() {
    return new Category(0, this.form.value.name, this.color);
  }

  onSubmit(event: any) {
    this.categoryService.updateCategory(new Category(this.oldCategory?.id, this.form.value.name, this.color)).toPromise()
      .then(value => {
        console.log(value)
        this.alertService.success('Category edited successfully');
        this.router.navigate(['/']);
      })
      .catch(reason => {
        console.log(reason)
        this.alertService.error(reason.error.message);
      });
  }

}
