import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSubirproductosPage } from './admin-subirproductos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSubirproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSubirproductosPageRoutingModule {}
