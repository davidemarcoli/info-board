import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.signup(val.email, val.username, val.password).then(data => {
        console.log("Data", data)
        let snackBarRef = this.snackBar.open(data.message, "Close", {
          duration: 2000,
        });
        this.router.navigateByUrl("login")
      })
        .catch(reason => {
          console.error("Error", reason)
          let snackBarRef = this.snackBar.open(reason.error.message, "Close", {
            duration: 2000,
          });
        })
    }
  }

  ngOnInit(): void {
  }


}
