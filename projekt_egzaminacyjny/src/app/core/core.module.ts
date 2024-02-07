import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/components/header/header.component';

import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,

  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class CoreModule {}
