import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {SignupComponent} from "./login/signup/signup.component";
import {CreateCategoryComponent} from "./forms/category/create-category/create-category.component";
import {ListCategoriesComponent} from "./forms/category/list-categories/list-categories.component";
import {CreatePostComponent} from "./forms/post/create-post/create-post.component";
import {ListPostsComponent} from "./forms/post/list-posts/list-posts.component";
import {UpdateCategoryComponent} from "./forms/category/update-category/update-category.component";
import {DeleteCategoryComponent} from "./forms/category/delete-category/delete-category.component";
import {ViewPostComponent} from "./forms/post/view-post/view-post.component";
import {EditPostComponent} from "./forms/post/edit-post/edit-post.component";
import {AdminAuthGuardService} from "./services/admin-auth-guard/admin-auth-guard.service";

const routes: Routes = [
  { path: 'home', component: ListPostsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'post', children: [
      {path: 'create', component: CreatePostComponent, canActivate: [AuthGuardService]},
      { path: 'edit', component: EditPostComponent, canActivate: [AuthGuardService] },
      {path: 'list', component: ListPostsComponent, canActivate: [AuthGuardService]},
      {path: 'view', component: ViewPostComponent, canActivate: [AuthGuardService]}
    ]},
  { path: 'category', canActivate: [AdminAuthGuardService], children: [
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit', component: UpdateCategoryComponent },
      { path: 'delete', component: DeleteCategoryComponent },
      { path: 'list', component: ListCategoriesComponent },
    ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
