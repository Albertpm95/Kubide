import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
