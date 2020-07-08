import { NgModule, Optional, SkipSelf } from '@angular/core';

import { UserService } from './services/user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [UserService],
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}