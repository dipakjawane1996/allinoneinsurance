import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { PasswordComponent } from './password/password.component';
import {ButtonModule} from 'primeng/button';
import { ProfileComponent } from './profile/profile.component';

const route : Routes=[
  {path:'homepage', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'otp', component:OtpComponent},
  {path:'password', component:PasswordComponent},
  {path:'profile', component:ProfileComponent}
]

@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    PasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, 
    [RouterModule.forChild(route)],
    FormsModule, ButtonModule
  ]
})
export class HomeModule { }
