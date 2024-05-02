import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GetDetailsService } from '../../services/get-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsby-id',
  templateUrl: './detailsby-id.component.html',
  styleUrl: './detailsby-id.component.css'
})
export class DetailsbyIdComponent {
id:any
userDetails:any
isloading=true
  constructor( private details:GetDetailsService,private rout:ActivatedRoute){

    this.rout.paramMap.subscribe((id)=>{
      this.id=id.get('id')
       console.log(this.id);

    })

    this.details.getbyId(this.id).subscribe((data)=>{
      this.userDetails=data
      this.isloading=false
    })

  }

}
