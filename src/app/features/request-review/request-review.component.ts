import { RESTORED_VIEW_CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Request } from 'src/app/models/request.model';
import { User } from 'src/app/models/user.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css'],
})
export class RequestReviewComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;
  lineItem: LineItem[] = [];
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
    this.requestService.getAllForReview(this.loggedInUser).subscribe(
      (data) => {
        this.requests = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
