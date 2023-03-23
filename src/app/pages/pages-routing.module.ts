import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMPONENTS } from '@constants';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: COMPONENTS.LIST, component: ListComponent },
  { path: COMPONENTS.DETAILS, component: DetailsComponent },
  {
    path: '',
    redirectTo: COMPONENTS.LIST,
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
