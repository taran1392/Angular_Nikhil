import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private db:AngularFireDatabase ) { }

id:any;

test:any;
  ngOnInit() {
    this.route.params.subscribe((d)=>{
          console.log(d);
          this.id=d["id"];
          this.db.object("/test/"+this.id).subscribe((d)=>{this.test=d});

          this.db.object("/test/"+this.id).update({})


    });
  }

}
