import { Injectable } from '@angular/core';
import { MainlistService } from './mainlist.service';
import { APIfunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  url= 'https://reqres.in/api/users'

  constructor(private details:APIfunctionService) {

}

getbyId(id:any){
  return this.details.getById(this.url,id)
}

}

