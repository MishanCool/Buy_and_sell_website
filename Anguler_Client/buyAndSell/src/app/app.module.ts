import { Component } from '@angular/core';
// built imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './Components/admin/admin.component';

// ngx-bootstrap modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavigationComponent,
    ImgCardComponent,
    LoginComponent,
    ProfileComponent,
    SideBarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClient
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    // RouterModule.forRoot( appRoutes , { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent , NavigationComponent]
})
export class AppModule { }
