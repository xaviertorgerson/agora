import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,

    LoadingComponent,

  ],
  declarations: [LoadingComponent]
})
export class SharedModule {}