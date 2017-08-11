import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userprofile:Profile;


  constructor(private http:Http,private auth:AuthService) { 

      let url="https://api.instagram.com/v1/users/self/?access_token="+this.auth.getAccessToken();
    this.http.get(url).subscribe((data:Response)=>{

        this.userprofile=new Profile(data.json());
    });

  }

  ngOnInit() {
  }





}


class Profile{

    id:string;
    name:string;
    profile_url:string;
    username:string
    constructor(obj:any){

      this.id=obj.data.id;
      this.name=obj.data.full_name;
      this.profile_url=obj.data.profile_picture;

    }
}