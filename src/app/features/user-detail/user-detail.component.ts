import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  //create a new variable User to store it and reference later
  user: User = new User();
  userId: number = 1;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params.id;
      this.userService.getbyId(this.userId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.user = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  deleteUser() {
    this.userService.deleteById(this.user.id).subscribe(
      (data) => {
        this.router.navigateByUrl('/user/list');
      },
      (error) => console.log(error)
    );
  }
}
