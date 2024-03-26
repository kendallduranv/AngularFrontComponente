import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/components/login.component';
import { RegisterComponent } from './register/components/register.component';




@NgModule({
    declarations: [
      LoginComponent,
      RegisterComponent

    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FormsModule,
      MaterialModule,
      AuthRoutingModule
    ]
  })
  export class AuthAgencyModule { }
  