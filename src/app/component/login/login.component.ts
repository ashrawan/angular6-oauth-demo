import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private router : Router) { }

  ngOnInit() {
  }

  userLogin(form){
    // console.log("form", form.value);
    let username = form.value.username;
    let password = form.value.password;
    
    this._auth.loginUser(form.value);

}

}
