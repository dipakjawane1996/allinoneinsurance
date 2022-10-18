import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewclaimComponent } from './newclaim/newclaim.component';
import { InsurerComponent } from './insurer/insurer.component';

import { TrackComponent } from './track/track.component';
import { RouterModule, Routes } from '@angular/router';
import { KnowComponent } from './know/know.component';

const route:Routes=[
  
  {path:"newclaim",component: NewclaimComponent},
  {path:"insurer",component: InsurerComponent},
  {path:"know",component: KnowComponent},
  {path:"track",component: TrackComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class ClaimModule { }
