import { Injectable } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Injectable()
export class AuthService {

  private CLIENT_ID="e24d38854eb84855bbde1845084e4a4c";
  private REDIRECT_URI="https://localhost:4200"
  private LOGIN_URL=`https://api.instagram.com/oauth/authorize/?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=token`;


  private access_Token;
  

  constructor(private route:ActivatedRoute,private router:Router ) {
  console.log("service created");

      this.route.fragment.subscribe((data)=>{

          console.log(data);
          
          if( data && data.indexOf("access_token")>=0)
            {
                   this.access_Token= data.split("=")[1]
                  console.log("token received "+ this.access_Token);
                  //this.router.navigate(["profile"]);
                }

      });

   }


  login(){
      //redirect to instagram login page
        window.location.href=this.LOGIN_URL;

  }

  isLoggedIn(){

      if(this.access_Token)
        return true;
      else
        return false;

  }

  getAccessToken(){
        return this.access_Token;
  }
}
