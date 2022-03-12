import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

//get user by id
//http://localhost:8080/users/id

//configure base url
const userRoute = '/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //make a new property
  url = environment.apiBaseUrl + userRoute;

  constructor(private http: HttpClient) {}

  //http://localhost:8080/users/
  //create a getAll function for user service (inject GET request)
  getAll(): Observable<User[]> {
    let requestUrl = this.url + '/';
    return this.http.get<User[]>(`${this.url}/`);
  }
}
