import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }
}
