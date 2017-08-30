import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  task:any

  @Output()
  stateChanged:EventEmitter<any>=new EventEmitter();

  hideDesc:boolean=false;

  constructor() { }

  ngOnInit() {
  
  
  }

  showHideContent(){

    this.hideDesc= !this.hideDesc;

  }

  changeState(){

    this.stateChanged.emit(this.task);    

  }

}
