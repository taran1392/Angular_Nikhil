import { TestBed, inject } from '@angular/core/testing';

import  {JournalEntry} from './JournalEntry';
import * as models from './models';


/*
"timestamp": string;
    
    "action": JournalEntry.ActionEnum;
    
    "target": string;
*/

describe('Interface : JournalEntry  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it("should create object ",()=>{
    

      let vObj:JournalEntry={
        timestamp:"",
        action:JournalEntry.ActionEnum.Created,
        target:""    
    };
    expect(vObj).toBeTruthy();
  });

  }
);
