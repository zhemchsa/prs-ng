import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from '../models/request.model';
import { User } from '../models/user.model';

// configure base url
const requestRoute = '/requests';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private url = environment.apiBaseUrl + requestRoute;
  constructor(private http: HttpClient) {}

  // http://localhost:8080/requests/
  getAll(): Observable<Request[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Request[]>(requestUrl);
  }

  createRequest(request: Request): Observable<Request[]> {
    return this.http.post<Request[]>(this.url, request);
  }

  getAllByUSer(user: User): Observable<Request[]> {
    return this.http.put<Request[]>(this.url, user);
  }

  // http://localhost:8080/requests/{id}
  getById(id: number): Observable<Request[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Request[]>(requestUrl);
  }

  //http://localhost:8080/requests/{id}
  updateRequest(request: Request): Observable<Request[]> {
    let requestUrl = this.url + '/' + request.id;
    return this.http.put<Request[]>(requestUrl, request);
  }

  deleteById(id: number): Observable<Request[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.delete<Request[]>(requestUrl);
  }

  setStatusApproved(request: Request): Observable<Request[]> {
    let requestUrl = this.url + '/status-approved/' + request.id;
    return this.http.put<Request[]>(requestUrl, request);
  }

  setStatusReview(request: Request): Observable<Request[]> {
    let requestUrl = this.url + '/status-review/' + request.id;
    return this.http.put<Request[]>(requestUrl, request);
  }

  setStatusReopened(request: Request): Observable<Request[]> {
    let requestUrl = this.url + '/status-reopened/' + request.id;
    return this.http.put<Request[]>(requestUrl, request);
  }

  setStatusRejected(request: Request): Observable<Request[]> {
    let requestUrl = this.url + '/status-rejected/' + request.id;
    return this.http.put<Request[]>(requestUrl, request);
  }

  getAllForReview(user: User): Observable<Request[]> {
    let requestUrl = this.url + '/review';
    return this.http.put<Request[]>(requestUrl, user);
  }
}
