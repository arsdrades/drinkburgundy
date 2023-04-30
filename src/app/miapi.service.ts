import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MiapiService {

  constructor(private http: HttpClient) {

   }
   getProduct(): Observable<any>{
    return this.http
    .get(
      'http://localhost:5000/API/productos'
    ).pipe(tap((_) => console.log("cargo los productos la api",_)))

   }
   

}

