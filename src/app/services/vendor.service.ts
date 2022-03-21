import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../models/vendor.model';

//get user by id
//http://localhost:8080/vendors/id

//configure base url
const vendorRoute = '/vendors';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  //make a new property
  url = environment.apiBaseUrl + vendorRoute;

  constructor(private http: HttpClient) {}

  //http://localhost:8080/vendors/
  //create a getAll function for vendor service (inject GET request)
  getAll(): Observable<Vendor[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Vendor[]>(`${this.url}/`);
  }

  //http://localhost:8080/vendor/{id}
  getbyId(id: number): Observable<Vendor[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Vendor[]>(requestUrl);
  }

  //http://localhost:8080/vendors
  createVendor(vendor: Vendor): Observable<Vendor[]> {
    return this.http.post<Vendor[]>(this.url, vendor);
  }

  deleteById(id: number): Observable<Vendor[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.delete<Vendor[]>(requestUrl);
  }
}
