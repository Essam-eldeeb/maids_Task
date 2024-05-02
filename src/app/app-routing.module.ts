import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsbyIdComponent } from './components/detailsby-id/detailsby-id.component';
import { MainlistComponent } from './components/mainlist/mainlist.component';

const routes: Routes = [
  {path:'mainlist/:page',component:MainlistComponent},
  {path:'',component:MainlistComponent},
  {path:'details/:id',component:DetailsbyIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
