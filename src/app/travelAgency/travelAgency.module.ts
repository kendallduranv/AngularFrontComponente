import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { TravelAgencyRoutingModule } from './travelAgency.routing';
import { AgentsComponent } from './agents/components/agents.component';
import { ServiceComponent } from './service/components/service.component';
import { ClientComponent } from './client/components/client.component';



@NgModule({
    declarations: [
        AgentsComponent,
        ServiceComponent,
        ClientComponent

    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FormsModule,
      MaterialModule,
    //   AgentModule,
      TravelAgencyRoutingModule
    ]
  })
  export class TravelAgencyModule { }
  