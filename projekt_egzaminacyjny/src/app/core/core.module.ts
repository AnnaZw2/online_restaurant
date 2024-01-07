import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from '../shared/shared.module';
import { BrandingComponent } from './components/branding/branding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        SingInComponent,
        SingUpComponent,
        LogoutComponent,
        BrandingComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
  
    ]
})
export class CoreModule { }
