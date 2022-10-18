import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from './adm/adm.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const r: Routes = [
  {path:'adm', component:AdmComponent}
]

@NgModule({
  declarations: [
    AdmComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(r)], FormsModule
  ]
})
export class AdminModule { }
