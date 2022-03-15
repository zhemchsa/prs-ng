import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor.model';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  //create a variable to store the list of Vendors
  vendors: Vendor[] = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.vendors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
