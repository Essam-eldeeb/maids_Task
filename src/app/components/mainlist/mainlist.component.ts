import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { MainlistService } from '../../services/mainlist.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { BehaviorSubject } from 'rxjs';
import { SearchIcon } from 'primeng/icons/search';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrl: './mainlist.component.css'
})
export class MainlistComponent {

  onPageChange2($event: PaginatorState) {
    throw new Error('Method not implemented.');
    }
    customers:any
    parameterpage:any
    searc:any

    showPributton=false
    showNextbutton=true

      constructor(private userlist:MainlistService ,private activrout:ActivatedRoute ,private rout:Router){
       this.activrout.paramMap.subscribe((param:any)=>{
          this.parameterpage=param.get('page')
          console.log(this.parameterpage)
        })



       this.userlist.usersListPage(this.parameterpage).subscribe((data:any)=>{
        this.customers=data.data
       })
       if(this.parameterpage ==2
       ){
         this.showPributton=true
         this.showNextbutton=false
       }

      }

      event(event:any){
      this.customers.find((data:any)=>{
      if(event.target.value==data.id){
        this.rout.navigateByUrl(`details/${event.target.value}`)
      }

      })

      }


}
function ngOnInit() {
}

