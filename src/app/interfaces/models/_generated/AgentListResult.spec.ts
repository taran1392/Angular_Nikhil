/*
 "total": number;
    
    "amount": number;
    
    "start": number;
    
    "sortby": string;
    
    "order": string;
    "agents": Array<models.InlineResponse2005Agents>;
*/
import { TestBed, inject } from '@angular/core/testing';

import  {AgentListResult} from './AgentListResult';
import * as models from './models';


describe('Interface : AgentListResult  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let agents:Array<models.InlineResponse2005Agents>=[];
     let vObj:AgentListResult={"total": 0,
    
    "amount": 0,
    
    "start": 0,
    
    "sortby": "desc",
    
    "order": "desc",
    "agents": agents
};
    expect(vObj).toBeTruthy();
  });



  }
);

