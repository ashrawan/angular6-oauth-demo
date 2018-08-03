import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private view_address_heading: string;

  constructor(private _addressService: AddressService) { }

  ngOnInit() {
  }

  submitForm(addressForm){
    let district = addressForm.value.district;
    let city = addressForm.value.city;
    let address_type = addressForm.value.address_type;

    console.log(addressForm.value);

    this._addressService.createAddress(addressForm)

  }

}
