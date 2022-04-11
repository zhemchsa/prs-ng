import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Request } from 'src/app/models/request.model';
import { User } from 'src/app/models/user.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css'],
})
export class RequestApproveComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;
  lineItems: LineItem[] = [];
  loggedInUser: User = new User();
  requests: Request[] = [];

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private lineItemService: LineItemService,
    private router: Router,
    private systemService: SystemService
  ) {}

  ngOnInit(): void {
    if (this.systemService.loggedInUser != undefined) {
      this.loggedInUser = this.systemService.loggedInUser;
    }
    this.route.params.subscribe(
      (params) => {
        this.requestId = params.id;
        this.requestService.getById(this.requestId).subscribe(
          (data) => {
            if (data.length > 0) {
              this.request = data[0];
              this.lineItemService.getAllByRequest(this.request).subscribe(
                (data) => {
                  this.lineItems = data;
                },
                (error) => console.log(error)
              );
            }
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }

  approveRequest() {
    this.requestService.setStatusApproved(this.request).subscribe(
      (data) => {
        this.router.navigateByUrl('/request/review');
      },
      (error) => console.log(error)
    );
  }

  rejectRequest() {
    this.requestService.setStatusRejected(this.request).subscribe(
      (data) => {
        this.router.navigateByUrl('/request/review');
      },
      (error) => console.log(error)
    );
  }
}
