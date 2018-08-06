import { Component, OnInit, Input } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Address } from '../../model/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input("address") public address: Address;

  all_address_type = ['PERMANENT', 'TEMPORARY'];
 
  private address_msg: string;
  private has_error = false;
  
  private userId;
  private data;
  
  constructor(private _addressService: AddressService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log("addressData ", this.address);

    this.userId = this.route.snapshot.paramMap.get('id');
  
  }

  submitForm(addressForm){
    let district = addressForm.value.district;
    let city = addressForm.value.city;
    let address_type = addressForm.value.address_type;

    // this.data = {
    //   "district": district,
    //   "city": city,
    //   "address_type": address_type,
    //   "status": 1,
    //   "user": {  
    //     "id": this.userId 
    //   }
    // }

    // console.log(this.data);
    console.log("addressData ", this.address);

    console.log("address form ", addressForm.value);
    this._addressService.updateAddress(addressForm.value, this.address.id).subscribe(
      res => { console.log(res); this.address_msg = "Update Successful" },
      err => { console.log(err); this.address_msg = "Update Failed"}
    )

  }

}
