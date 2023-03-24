import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/components/components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule,
    InfiniteScrollModule,
    ComponentsModule

  ]
})
export class PagesModule { }
