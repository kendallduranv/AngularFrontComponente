import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/components/service.component';
import { DestinationComponent } from './destination/components/destination.component';
import { PackageComponent } from './package/components/package.component';





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
                path:'package',
                component: PackageComponent 
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