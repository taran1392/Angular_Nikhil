import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router){
      


  }


  login(){
        this.auth.login();

  }

  ngOnInit() {

    console.log(google);

    var uluru = {lat: 28.67935, lng: 77.34291};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });


    if(this.auth.isLoggedIn())
    {
        this.router.navigate(["/profile"]);
    }
  }

  initMap(){

    console.log(" initMap ready");

  }

}
