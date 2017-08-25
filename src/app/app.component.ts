import { Component  } from '@angular/core';
import {LocalstorageService } from './service/localstorage.service';
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private st:LocalstorageService,private auth:AuthService,private titleService:Title,private router:Router){



      this.router.events.subscribe( (event)=>{

        //console.log(event);
        if(event instanceof NavigationStart  ){

                  if(event.url.localeCompare("/")==0)
                    {
                              this.titleService.setTitle("LoginPage");
                              this.setMetaData("metaDesc","This is Login page");

                              this.setMetaData("metaKeyword","login,instagram,myapp,testApp");
                    }

                  if(event.url.indexOf("profile")>=0)
                    {   
                            this.titleService.setTitle("ProfilePage");

                            this.setMetaData("metaDesc","This is Profile page");
                            
                          this.setMetaData("metaKeyword","profile,instagramProfile,myappProfile,testApp");
                    }

        }

      } );

  }


  setMetaData(id,content){
console.log("")
          var m=document.getElementById(id);
console.log(m);
        m["content"]=content;
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