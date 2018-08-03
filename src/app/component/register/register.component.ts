import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private create_user_msg: string;
  public has_error = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  createuser(formData){
    console.log("form data ",formData.value);
    this._userService.createUser(formData.value).subscribe(res => {
      // console.log("creation successful", res);
      this.has_error = false;
      this.create_user_msg = "Registration Successful, Please Login";
  }, error => { 
    // console.log("user creation error", error.error);
    this.has_error = true;
    this.create_user_msg = error.error.message;
  });

  }

}
