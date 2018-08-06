import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  all_address_type = ['PERMANENT', 'TEMPORARY'];
 
  private address_msg: string;
  private has_error = false;
  
  private userId;
  private data;
  
  constructor(private _addressService: AddressService, private route: ActivatedRoute, private userdetail: UserDetailComponent) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');
  
  }

  submitForm(addressForm){
    // let district = addressForm.value.district;
    // let city = addressForm.value.city;
    // let address_type = addressForm.value.address_type;

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
    addressForm.value.user = new User(this.userId);

    console.log("address form ", addressForm.value);
    this._addressService.createAddress(addressForm.value).subscribe(
      res => { console.log(res); this.address_msg = "Add Successful"; this.userdetail.loadAddressData() },
      err => { console.log(err); this.address_msg = "Add Failed"}
    )

  }

}
