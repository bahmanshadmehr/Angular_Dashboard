import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/auth/login/login.component';
import { SignupComponent } from './componenets/auth/signup/signup.component';
import { BaseComponent } from './componenets/dashboard/base/base.component';
import { SideMenuComponent } from './componenets/dashboard/side-menu/side-menu.component';
import { InterenceComponent } from './componenets/dashboard/interence/interence.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BaseComponent,
    SideMenuComponent,
    InterenceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
