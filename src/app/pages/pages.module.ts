import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComponentsModule } from 'app/components/components.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InfiniteScrollModule,
    ComponentsModule
  ]
})
export class PagesModule { }
