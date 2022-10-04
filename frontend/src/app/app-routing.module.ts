import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {SignupComponent} from "./login/signup/signup.component";
import {CreateCategoryComponent} from "./forms/category/create-category/create-category.component";
import {ListCategoriesComponent} from "./forms/category/list-categories/list-categories.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'post', children: [
      {path: 'create', component: CreateCategoryComponent, canActivate: [AuthGuardService]},
      {path: 'list', component: ListCategoriesComponent, canActivate: [AuthGuardService]}
    ]},
  { path: 'category', children: [
      { path: 'create', component: CreateCategoryComponent, canActivate: [AuthGuardService] },
      { path: 'list', component: ListCategoriesComponent, canActivate: [AuthGuardService] },
    ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
