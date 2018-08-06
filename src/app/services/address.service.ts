import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constant } from '../constant/constant';
import { Address } from '../model/address';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    console.log("Address api error ", error);
    return Observable.throw(error.message);
  }

  
  // Demo App API
  getAllAddresss(): Observable<Address[]> {
    return this.http.get<Address[]>(Constant.API_ENDPOINT+"/rest/address")
      .catch(this.errorHandler);
  }

  getAddressById(id): Observable<Address[]> {
    return this.http.get<Address[]>(Constant.API_ENDPOINT+"/rest/address/"+id)
      .catch(this.errorHandler);
  }

  getAddressByUserId(id): Observable<Address[]> {
    return this.http.get<Address[]>(Constant.API_ENDPOINT+"/rest/address/user/"+id)
      .catch(this.errorHandler);
  }

  createAddress(AddressData): Observable<Address[]> {
    return this.http.post<any>(Constant.API_ENDPOINT+"/rest/address", AddressData)
      .catch(this.errorHandler);
  }

  updateAddress(AddressData, id): Observable<Address[]> {
    return this.http.put<any>(Constant.API_ENDPOINT+"/rest/address/"+id, AddressData)
      .catch(this.errorHandler);
  }

  deleteAddress(id): Observable<Address[]> {
    return this.http.delete<any>(Constant.API_ENDPOINT+"/rest/address/"+id)
      .catch(this.errorHandler);
  }

}



