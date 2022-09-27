import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  passwordVisible = false;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  async login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password).then(data => {
        console.log("Data", data)
        this.router.navigateByUrl("home")
      })
    }
  }

  ngOnInit(): void {
  }

}
