import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  pendingTasks:Array<any>=[ {task:"Task 1", desc:"ANgular classes to b etaken  " ,state:"pending"  },
                            { task:"Learn Routing", desc:" some random description here   ", state:"pending"   },
                            { task: "Learn Services", desc:" Will cover it in future",state:"" }
  ];
  completedTasks:Array<any>=[ {task:"INtro to angular", desc:"ANgular classes Started  " ,state:"completed"  },
  { task:"Learn Component", desc:" some random description here   ", state:"completed"   },
  { task: "Second angular class", desc:" SOme random text",state:"completed" }
];
  constructor() { }

  ngOnInit() {
  }

  taskClicked(t){

      if(t["state"]=="completed")
        {
          //move to pending
          this.pendingTasks.push(t);
          this.completedTasks= this.completedTasks.filter( (task)=>{ return t.task!=task.task  }  )

        }else{

          //move to completed

          this.completedTasks.push(t);
          this.pendingTasks= this.pendingTasks.filter( (task)=>{ return t.task!=task.task  }  )

        }


  }

}
