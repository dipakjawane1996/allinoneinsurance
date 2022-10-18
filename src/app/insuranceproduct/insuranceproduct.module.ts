import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'health-insurance',component:HealthInsuranceComponent},
  {path:'life-insurance',component:LifeInsuranceComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   [RouterModule.forChild(routes)]
  ]
})
export class InsuranceproductModule { }
