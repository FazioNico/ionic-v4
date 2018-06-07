import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './containers/detail/detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    DetailRoutingModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
