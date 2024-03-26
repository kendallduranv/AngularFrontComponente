import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[

  {
      path: 'auth',
      loadChildren:() => import ('./auth/auth.module').then(m => m.AuthAgencyModule),

  },
  {
      path: 'travelAgency',
      loadChildren:() => import ('./travelAgency/travelAgency.module').then(m => m.TravelAgencyModule),

  },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
