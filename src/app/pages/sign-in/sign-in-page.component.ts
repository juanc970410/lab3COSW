import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-task-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
@Injectable()
export class SignInPageComponent{
    private signInForm = null;
    private loginError: string;

    constructor(public router: Router, public formBuilder: FormBuilder, public userService: UserService) {

  }
    ngOnInit(){
        this.signInForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    }
    
    doLogin() {
        this.userService.login(
          this.signInForm.get('username').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['tasks']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
          })
    }
}