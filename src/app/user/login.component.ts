import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login('', '');
  constructor() {}

  ngOnInit(): void {}

  log(): void {
    console.log(this.login);
  }
}
