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
import { AngularFireModule } from 'angularfire2';
import { TestComponent } from './test/test.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { TestFormComponent } from './test-form/test-form.component';
import { NavabrComponent } from './navabr/navabr.component'
import { ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    CalendarComponent,
    FileUploadComponent,
    TodoComponent,
    TodoTaskComponent,
    TestComponent,
    TestFormComponent,
    NavabrComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAK6IVXqehh7g1LqcJGK3WKykLq6id5tVA",
      authDomain: "invento-7d49c.firebaseapp.com",
      databaseURL: "https://invento-7d49c.firebaseio.com",
      projectId: "invento-7d49c",
      storageBucket: "invento-7d49c.appspot.com",
      messagingSenderId: "422314890274"
    }
  )
    ,
    HttpModule,ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)  
  
  ],
    providers: [LocalstorageService,AuthService,AngularFireDatabase],
    bootstrap: [AppComponent]
})
export class AppModule { }
