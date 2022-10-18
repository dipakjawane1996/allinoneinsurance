import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInsuranceComponent } from './home-insurance/home-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeInsuranceComponent},
  {path:'car', component: CarInsuranceComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class InsuranceModule { }
