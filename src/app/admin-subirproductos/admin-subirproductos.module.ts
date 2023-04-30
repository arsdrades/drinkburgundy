import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSubirproductosPageRoutingModule } from './admin-subirproductos-routing.module';

import { AdminSubirproductosPage } from './admin-subirproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSubirproductosPageRoutingModule
  ],
  declarations: [AdminSubirproductosPage]
})
export class AdminSubirproductosPageModule {}
