import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LocalstorageService } from './service/localstorage.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    CalendarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
{path:"login",component:LoginComponent},

      {path:"profile",component:ProfileComponent},
        {path:'' ,redirectTo:"login" ,pathMatch:"full"  },
        
    ])
  ],
  providers: [LocalstorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
