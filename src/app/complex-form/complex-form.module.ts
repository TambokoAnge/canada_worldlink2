import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { SharedModule } from '../shared/shared.module';
import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormService } from './services/complex-form.service';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    ComplexFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComplexFormRoutingModule
  ],
  providers: [
    ComplexFormService
  ]
})
export class ComplexFormModule { }
