import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { AuthenticationService } from './../../service/authentication.service';
import { Login } from './../../model/login';
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';
import { TokenResponse } from 'src/app/model/token-response';

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
    this.authenticationService.logout();
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
        const u: TokenResponse = jwt_decode(data.token);
        this.userService.getUser(parseInt(u.sub, 10))
        .subscribe(user => {
          this.navigate(user);
        });
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

      protected navigate(user: User) {
        user.profile === 'USER'
          ? this.router.navigate(['atm'], { queryParams: { name: user.name, role: user.profile } })
          : user.profile === 'ADMIN'
            ? this.router.navigate(['admin'], { queryParams: { name: user.name, role: user.profile } })
            : console.log('Profile undefined');
      }

  }
