import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests:any;
  constructor( private db:AngularFireDatabase,private router:Router ) { }

  ngOnInit() {

    this.db.list("/test").subscribe((testlist)=>{

      console.log(testlist);
        this.tests=testlist;
      testlist[7].$key
    })


    this.db.object("/test/6").set({})
  }

  showDetails(test){

      //"test/edit/12"
      this.router.navigate(["test","edit", test.$key ])
  }

}
