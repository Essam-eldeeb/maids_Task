import { Injectable } from '@angular/core';
import { APIfunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class MainlistService {
url='https://reqres.in/api/users'

  constructor(private list:APIfunctionService) {
   }
   usersListPage(page:any){
   return this.list.getbypage(this.url,page)
   }
}
