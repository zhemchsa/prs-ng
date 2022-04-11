import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/models/request.model';
import { User } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  requests: Request[] = [];
  loggedInUser: User = new User();
  request: Request = new Request();
  requestId: number = 0;

  constructor(
    private requestService: RequestService,
    private systemService: SystemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loggedInUser = this.systemService.loggedInUser;
    if (loggedInUser && loggedInUser.admin) {
      this.requestService.getAll().subscribe(
        (data) => {
          this.requests = data;
          console.log(data);
        },
        (error) => console.log(error)
      );
    } else if (loggedInUser && !loggedInUser.admin) {
      this.requestService.getAllByUSer(loggedInUser).subscribe(
        (data) => {
          this.requests = data;
          console.log(data);
        },
        (error) => console.log(error)
      );
    }
  }

  deleteRequest(id: number) {
    this.requestService.deleteById(id).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }
}
