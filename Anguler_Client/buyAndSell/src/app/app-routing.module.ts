import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'register',   component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
