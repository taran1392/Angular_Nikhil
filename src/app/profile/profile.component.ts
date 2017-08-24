import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userprofile:Profile;
calendarOptions:any;

  constructor(private http:Http,private auth:AuthService) { 

      let url="https://api.instagram.com/v1/users/self/?access_token="+this.auth.getAccessToken();
    this.http.get(url).subscribe((data:Response)=>{

        this.userprofile=new Profile(data.json());



        
    });




    this.calendarOptions= {
        height:400,width:400,
        fixedWeekCount : false,
        defaultDate: '2017-08-01',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2016-09-01'
          },
          {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
          }
        ]
      };
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