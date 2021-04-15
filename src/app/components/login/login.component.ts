import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(public formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.userService.storeUserData(this.loginForm.value.email);
    this.router.navigate(['./home']);
  }


}
