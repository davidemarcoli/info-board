import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helper/jwt.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SignupComponent} from './login/signup/signup.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CreateCategoryComponent} from './forms/category/create-category/create-category.component';
import {ListCategoriesComponent} from './forms/category/list-categories/list-categories.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {ErrorInterceptor} from "./helper/error.interceptor";
import {CreatePostComponent} from './forms/post/create-post/create-post.component';
import {ListPostsComponent} from './forms/post/list-posts/list-posts.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {DeleteCategoryComponent} from './forms/category/delete-category/delete-category.component';
import {UpdateCategoryComponent} from './forms/category/update-category/update-category.component';
import {MatCardModule} from "@angular/material/card";
import {TruncatePipe} from "./truncate.pipe";
import {ViewPostComponent} from './forms/post/view-post/view-post.component';
import {ColorPickerModule} from "ngx-color-picker";
import { CategoryPillComponent } from './components/category-pill/category-pill.component';
import { EditPostComponent } from './forms/post/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    CreateCategoryComponent,
    ListCategoriesComponent,
    CreatePostComponent,
    ListPostsComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    TruncatePipe,
    ViewPostComponent,
    CategoryPillComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    CKEditorModule,
    MatCardModule,
    ColorPickerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
