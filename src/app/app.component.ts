import { Component } from '@angular/core';
import {LocalstorageService } from './service/localstorage.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private st:LocalstorageService,private auth:AuthService){



  }





    add(key:string,value:string){
      this.st.saveItem(key,value).then((d)=>{console.log(d)}).catch ((e)=>{console.log(e)});

  }


  retrieve(key:string){
      this.st.retrieveItem(key).then((d)=>{console.log(d)}).catch((e)=>{console.log("failed");  console.log(e)});

  }


  remove(key:string){
      this.st.removeItem(key).then((d)=>{console.log(d)}).catch ((e)=>{console.log(e)});

  }

}




/*
*/