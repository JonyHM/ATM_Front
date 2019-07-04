import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../../service/authentication.service';
import { Login } from './../../model/login';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public login: Login;
  public user: User;
  public role: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.login = new Login();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authenticationService.logout();
  }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.login.email = this.loginForm.get('email').value;
    this.login.password = this.loginForm.get('password').value;

    this.authenticationService.login(this.login)
      .pipe(first())
      .subscribe(
        data => {
          this.userService.getUser(this.login.email)
            .subscribe(user => this.user = user);

          this.role = this.user.profile;

          console.log(this.role);

          this.router.navigate(['/atm']);
        },
        error => {
          this.error = 'Username or password incorrect';
          this.loading = false;
          console.log(error);
        }
      );
  }

  public get emailError() {
    return this.loginForm.get('email').hasError('required') ? 'You need to enter a value' : '';
  }

  public get passwordError() {
    return this.loginForm.get('password').hasError('required') ? 'You need to enter a value' : '';
  }
}
