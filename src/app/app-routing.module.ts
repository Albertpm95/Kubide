import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES } from '@constants';

const routes: Routes = [
  { path: MODULES.CHARACTER, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {
    path: '',
    redirectTo: MODULES.CHARACTER,
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
