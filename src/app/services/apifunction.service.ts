import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIfunctionService {
  constructor(private http:HttpClient) { }
  get(url:any){
    return this.http.get(url)
  }
  getById(url:any,id:any){
    return this.http.get(`${url}/${id}`)
  }
  getbypage(url:any,page:any){
    return this.http.get(`${url}?page=${page}`)
  }

}
