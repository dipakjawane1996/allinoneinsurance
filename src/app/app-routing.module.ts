import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './admin/adm/adm.component';
import { InsurerComponent } from './claim/insurer/insurer.component';
import { KnowComponent } from './claim/know/know.component';

import { NewclaimComponent } from './claim/newclaim/newclaim.component';
import { TrackComponent } from './claim/track/track.component';
import { HomeModule } from './home/home.module';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './home/login/login.component';
import { OtpComponent } from './home/otp/otp.component';
import { PasswordComponent } from './home/password/password.component';
import { ProfileComponent } from './home/profile/profile.component';
import { RegisterComponent } from './home/register/register.component';
import { CarInsuranceComponent } from './insurance/car-insurance/car-insurance.component';
import { HomeInsuranceComponent } from './insurance/home-insurance/home-insurance.component';
import { HealthInsuranceComponent } from './insuranceproduct/health-insurance/health-insurance.component';
import { LifeInsuranceComponent } from './insuranceproduct/life-insurance/life-insurance.component';
import { HomePageComponent } from './mainhome/home-page/home-page.component';

import { HealthrenewalComponent } from './renewpolicy/healthrenewal/healthrenewal.component';
import { LiferenewalComponent } from './renewpolicy/liferenewal/liferenewal.component';
import { MotorrenewalComponent } from './renewpolicy/motorrenewal/motorrenewal.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'liferenewal', component: LiferenewalComponent },
  { path: 'healthrenewal', component: HealthrenewalComponent },
  { path: 'motorrenewal', component: MotorrenewalComponent },

  { path: "Health-Products", component: HealthInsuranceComponent },
  { path: "life-insurance", component: LifeInsuranceComponent },
  { path: "newclaim", component: NewclaimComponent },
  { path: "insurer", component: InsurerComponent },
  { path: "know", component: KnowComponent },
  { path: "track", component: TrackComponent },
  { path: 'home', component: HomeInsuranceComponent },
  { path: 'car', component: CarInsuranceComponent },
  { path: 'adm', component: AdmComponent },
  

  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'claim', loadChildren: () => import('./claim/claim.module').then(m => m.ClaimModule)
  },
  {
    path: 'insurance', loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule)
  },
  {
    path: 'mainhome', loadChildren: () => import('./mainhome/mainhome.module').then(m => m.MainhomeModule)
  },
  {
    path:'renewpolicy', loadChildren:()=>import('./renewpolicy/renewpolicy.module').then(m=>m.RenewpolicyModule)
  },
  {
    path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'insuranceproduct', loadChildren: () => import('./insuranceproduct/insuranceproduct.module').then(m => m.InsuranceproductModule)
  },
  { path: "support", loadChildren: () => import('./support/support.module').then(s => s.SupportModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
