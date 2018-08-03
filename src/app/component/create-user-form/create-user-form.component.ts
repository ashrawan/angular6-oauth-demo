import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {


  private create_user_error: string;
  private view_user_create: string;
  private view_form__submit_type: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(userForm){
    
  }

}
