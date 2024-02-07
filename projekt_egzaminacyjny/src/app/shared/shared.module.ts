import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingInButtonComponent } from './components/sing-in-button/sing-in-button.component';
import { SingUpButtonComponent } from './components/sing-up-button/sing-up-button.component';
import { BrandingComponent } from './components/branding/branding.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SingInButtonComponent,
    SingUpButtonComponent,
    BrandingComponent
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SingInButtonComponent,
    SingUpButtonComponent,
    BrandingComponent
  ]
})
export class SharedModule { }
