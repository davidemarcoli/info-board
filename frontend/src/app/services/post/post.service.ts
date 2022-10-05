import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {AppSettings} from "../../app.settings";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(AppSettings.API_ENDPOINT + 'posts/');
  }

  public getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(AppSettings.API_ENDPOINT + 'posts/' + id);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(AppSettings.API_ENDPOINT + 'posts/', post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(AppSettings.API_ENDPOINT + 'posts/' + post.id, post);
  }

  public deletePost(id: number): Observable<void> {
    return this.http.delete<void>(AppSettings.API_ENDPOINT + 'posts/' + id);
  }
}
