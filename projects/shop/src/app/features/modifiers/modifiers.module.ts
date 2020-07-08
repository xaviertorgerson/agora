import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ModifiersRoutingModule } from './modifiers-routing.module';
import { ModifiersComponent } from './modifiers.component';


@NgModule({
  declarations: [ModifiersComponent],
  imports: [
    SharedModule,
    ModifiersRoutingModule
  ]
})
export class ModifiersModule { }
