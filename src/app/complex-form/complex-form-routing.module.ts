import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComplexFormComponent } from "./components/complex-form/complex-form.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: ComplexFormComponent},
  {path:'register', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class ComplexFormRoutingModule {}
