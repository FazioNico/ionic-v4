import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabOneRoutingModule } from './tab-one-routing.module';
import { TabOneComponent } from './containers/tab-one/tab-one.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabOneRoutingModule
  ],
  declarations: [TabOneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabOneModule { }
