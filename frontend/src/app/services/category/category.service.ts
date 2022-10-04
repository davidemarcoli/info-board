import { Injectable } from '@angular/core';
import {Category} from "../../models/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../app.settings";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(AppSettings.API_ENDPOINT + 'categories/');
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(AppSettings.API_ENDPOINT + 'categories/' + id);
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(AppSettings.API_ENDPOINT + 'categories/', category);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(AppSettings.API_ENDPOINT + 'categories/' + category.id, category);
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(AppSettings.API_ENDPOINT + 'categories/' + id);
  }

}
