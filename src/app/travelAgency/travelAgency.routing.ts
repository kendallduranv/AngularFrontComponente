import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/components/service.component';
import { ClientComponent } from './client/components/client.component';
import { DestinationComponent } from './destination/components/destination.component';





const routes: Routes =[
    {
        path:'',
        children:[
            {
                path:'destination',
                component:DestinationComponent
            },
            {
                path:'service',
                component:ServiceComponent
            },
            {
                path:'client',
                component: ClientComponent 
            },
            // {
            //     path:'editar/:id',
            //     component:AgregarComponent
          
            // },
            // {
            //     path:'buscar',
            //     component:BuscarComponent
          
            // },
            // {
            //     path:':id',
            //     component:HeroeComponent,
          
            // },
            {
                path:'**',
                redirectTo: 'listado'
            }
        ]
    }
]

@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [
        RouterModule,
        
    ]
})

export class TravelAgencyRoutingModule{ }