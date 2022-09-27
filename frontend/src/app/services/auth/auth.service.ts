import { Injectable } from '@angular/core';
import * as moment from "moment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string ): any {
    return this.http.post<any>('http://localhost:8081/api/auth/signin', {username: username, password: password}).subscribe(value => {
      this.setSession(value);
      return value;
    })
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    const userObj = {
      token: authResult.accessToken,
      username: authResult.username,
      expiresAt: expiresAt.valueOf()
    }

    localStorage.setItem('currentUser', JSON.stringify(userObj));
  }

  logout() {
    localStorage.removeItem("currentUser");
  }

  public isLoggedIn() {
    return localStorage.getItem("currentUser") && moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const userObj = JSON.parse(localStorage.getItem('currentUser')!);
    const expiresAt = JSON.parse(userObj.expiresAt || '{}');
    return moment(expiresAt);
  }
}
