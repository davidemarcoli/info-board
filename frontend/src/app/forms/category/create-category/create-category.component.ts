import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category/category.service";
import {Category} from "../../../models/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private categoryService: CategoryService, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  get name() {
    return this.form.get('name');
  }

  onSubmit(event: any) {
    console.log(event)
    console.log(this.form)
    console.log(this.form.value.name)

    this.categoryService.createCategory(new Category(this.form.value.name)).toPromise()
      .then(value => {
        console.log(value)
        this.alertService.success('Category created successfully');
      })
      .catch(reason => {
        console.log(reason)
        this.alertService.error(reason.error.message);
      });
  };

}
