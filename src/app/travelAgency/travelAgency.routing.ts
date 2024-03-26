import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './agents/components/agents.component';
import { ServiceComponent } from './service/components/service.component';
import { ClientComponent } from './client/components/client.component';





const routes: Routes =[
    {
        path:'',
        children:[
            {
                path:'agent',
                component:AgentsComponent
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