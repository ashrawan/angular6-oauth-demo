import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  public errorMsg; 

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllUsers()
      .subscribe(
        data => { this.users = data; console.log("users data: ", this.users); },
        error => this.errorMsg = error );
  }

}
