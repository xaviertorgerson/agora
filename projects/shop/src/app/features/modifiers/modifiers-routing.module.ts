import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiersComponent } from './modifiers.component';

const routes: Routes = [{ path: '', component: ModifiersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifiersRoutingModule { }
