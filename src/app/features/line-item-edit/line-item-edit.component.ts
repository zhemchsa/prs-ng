import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/models/line-item.model';
import { Product } from 'src/app/models/product.model';
import { Vendor } from 'src/app/models/vendor.model';
import { Request } from 'src/app/models/request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { LineItemService } from 'src/app/services/line-item.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css'],
})
export class LineItemEditComponent implements OnInit {
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  requestId: number = 0;
  products: Product[] = [];
  vendors: Vendor[] = [];
  lineItemId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private lineItemService: LineItemService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.lineItemId = params.id;
      this.lineItemService.getbyId(this.lineItemId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.lineItem = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    this.productService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editItem() {
    this.lineItemService.editItem(this.lineItem).subscribe(
      (data) => {
        console.log(data);
        if (data.length > 0) {
          this.lineItem = data[0];
          this.router.navigateByUrl(
            '/request/lines/' + this.lineItem.request.id
          );
        }
      },
      (error) => console.log(error)
    );
  }

  compareFn(product1: Product, product2: Product) {
    return product1.id === product2.id;
  }
}
