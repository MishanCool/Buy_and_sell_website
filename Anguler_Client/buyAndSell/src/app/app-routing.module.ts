import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'register',   component: RegisterComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'profile',   component: ProfileComponent },
  { path: 'admin_dashboard',   component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
