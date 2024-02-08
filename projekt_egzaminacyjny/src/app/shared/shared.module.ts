import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInButtonComponent } from './components/sing-in-button/sing-in-button.component';
import { SingUpButtonComponent } from './components/sing-up-button/sing-up-button.component';
import { BrandingComponent } from './components/branding/branding.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    SingInButtonComponent,
    SingUpButtonComponent,
    BrandingComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [CommonModule, DropdownModule],
  exports: [
    SingInButtonComponent,
    SingUpButtonComponent,
    BrandingComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
