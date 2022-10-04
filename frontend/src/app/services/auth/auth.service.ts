import {Injectable} from '@angular/core';
import * as moment from "moment";
import {HttpClient} from "@angular/common/http";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  async login(username: string, password: string): Promise<any> {
    return await this.http.post<any>('http://localhost:8081/api/auth/signin', {
      username: username,
      password: password
    }).toPromise().then(value => {
      this.setSession(value);
      return value;
    })
  }

  async signup(email: string, username: string, password: string): Promise<any> {
    return this.http.post<any>('http://localhost:8081/api/auth/signup', {
      email: email,
      username: username,
      password: password
    }).subscribe(value => {
      console.log("Signup Value", value)
      this.setSession(value);
      return value;
    });
  }

  private setSession(authResult: any) {
    const decoded: any = jwt_decode(authResult.accessToken) || {};

    if (!decoded) return;

    const expiresAt = moment(decoded.exp);

    const userObj = {
      token: authResult.accessToken,
      username: authResult.username,
      expiresAt: expiresAt.valueOf()
    }

    localStorage.setItem('currentUser', JSON.stringify(userObj));
  }

  logout() {
    localStorage.removeItem("currentUser");
    location.reload()
  }

  public isLoggedIn() {
    // console.log(this.getExpiration().valueOf())
    // console.log(moment().valueOf())
    // console.log(moment().isBefore(this.getExpiration()));
    const isLoggedIn = localStorage.getItem("currentUser") && moment().isBefore(this.getExpiration());
    // if not on login or register page, redirect to login page
    if (!isLoggedIn && !location.pathname.includes("login") && !location.pathname.includes("register")) {
      location.href = "/login";
    }
    return isLoggedIn;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const userObj = JSON.parse(localStorage.getItem('currentUser')!);
    if (!userObj) {
      return moment();
    }
    let expiresAt = JSON.parse(userObj.expiresAt || '{}');
    expiresAt = +(expiresAt + '000')
    // console.log("Expires At", expiresAt)
    return moment(expiresAt);
  }

  getUsername() {
    const userObj = JSON.parse(localStorage.getItem('currentUser')!);
    return userObj.username;
  }
}
