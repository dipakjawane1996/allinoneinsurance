import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiferenewalComponent } from './liferenewal/liferenewal.component';
import { HealthrenewalComponent } from './healthrenewal/healthrenewal.component';
import { MotorrenewalComponent } from './motorrenewal/motorrenewal.component';

import { RouterModule, Routes } from '@angular/router';
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const route : Routes=[
  {path:'liferenewal', component:LiferenewalComponent},
  {path:'healthrenewal', component:HealthrenewalComponent},
  {path:'motorrenewal', component:MotorrenewalComponent},

]

@NgModule({
  declarations: [
    LiferenewalComponent,
    HealthrenewalComponent,
    MotorrenewalComponent,
  
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)], 
    CardModule, 
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RenewpolicyModule { }
