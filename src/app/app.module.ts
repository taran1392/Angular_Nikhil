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
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    CalendarComponent,
    FileUploadComponent,
    TodoComponent,
    TodoTaskComponent
  ],
  imports: [
    HttpModule,ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
{path:"login",component:TodoComponent},

      {path:"profile",component:ProfileComponent},
        {path:'' ,redirectTo:"login" ,pathMatch:"full"  },
        
    ])
  ],
  providers: [LocalstorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
