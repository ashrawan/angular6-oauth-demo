import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) { }

  
  private _url: string = "http://localhost:8080/api";

  errorHandler(error: HttpErrorResponse){
    console.log("Address api error ", error);
    return Observable.throw(error.message || "Server Error");
  }

  // Demo App API
  getAllAddresss(): Observable<Address[]> {
    return this.http.get<Address[]>(this._url+"/rest/Addresss")
      .catch(this.errorHandler);
  }

  getAddressById(id): Observable<Address[]> {
    return this.http.get<Address[]>(this._url+"/rest/Addresss/"+id)
      .catch(this.errorHandler);
  }

  createAddress(AddressData): Observable<Address[]> {
    return this.http.post<any>(this._url+"rest/Address", AddressData)
      .catch(this.errorHandler);
  }

  updateAddress(AddressData, id): Observable<Address[]> {
    return this.http.put<any>(this._url+"/rest/Addresss"+id, AddressData)
      .catch(this.errorHandler);
  }

}

export interface Address {
  id: number,
  city: string,
  district: string,
  address_type: string,
  status: number
}

