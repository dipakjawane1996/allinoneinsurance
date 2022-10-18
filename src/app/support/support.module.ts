import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const route: Routes = [
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent }
]

@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)],
    FormsModule
  ]
})
export class SupportModule { }
