import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AddressService } from '../../services/address.service';
import { Address } from '../../model/address';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private addresss;
  private errorMsg;
  private has_error = false;
  selectedAddress: Address;
  private id;
  private addForm = true;

  constructor(private _userService: UserService,
    private _addressService: AddressService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadAddressData();
  }

  loadAddressData(){

    this.id = this.route.snapshot.paramMap.get('id');
    this._addressService.getAddressByUserId(this.id)
      .subscribe(
        data => { this.addresss = data; console.log("address data: ", this.addresss); },
        error => this.errorMsg = error);
  }

  onSelect(address: Address): void {
    console.log("onSelect ", address);
    this.addForm = false;
    this.selectedAddress = address;
  }

  newAddress(){
    this.selectedAddress = new Address();
    this.addForm = true;
  }

  deleteAddress(id){
    this._addressService.deleteAddress(id).subscribe(
      res=> {console.log("Delete Successful"); this.errorMsg = "Delete Successful"; this.loadAddressData()},
      err=> {console.log("Delete Failed"); this.errorMsg = "Delete Failed"}
    )
  }

}
