import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login.component';
import { RegisterComponent } from './register/components/register.component';


const routes: Routes =[
    {
        path:'',
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            },

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

export class AuthRoutingModule{ }