import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from 'src/app/register/register.component';
import {LoginComponent} from 'src/app/login/login.component';
import { from } from 'rxjs';
const routes: Routes = [

  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
