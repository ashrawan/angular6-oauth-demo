import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Constant } from '../constant/constant';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    console.log("User api error ", error);
    return Observable.throw(error); 
  }

  // Demo App API
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(Constant.API_ENDPOINT+"/rest/users")
      .catch(this.errorHandler);
  }

  getUserById(id): Observable<User[]> {
    return this.http.get<User[]>(Constant.API_ENDPOINT+"/rest/users/"+id)
      .catch(this.errorHandler);
  }

  createUser(userData): Observable<User[]> {
    return this.http.post<any>(Constant.API_ENDPOINT+"/users", userData)
      .catch(this.errorHandler);
  }

  updateUser(userData, id): Observable<User[]> {
    return this.http.put<any>(Constant.API_ENDPOINT+"/rest/users"+id, userData)
      .catch(this.errorHandler);
  }

}
