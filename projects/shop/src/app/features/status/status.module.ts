import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';


@NgModule({
  declarations: [StatusComponent],
  imports: [
    SharedModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
