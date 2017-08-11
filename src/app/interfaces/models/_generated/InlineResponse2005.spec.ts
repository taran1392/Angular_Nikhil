import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2005} from './InlineResponse2005';
import * as models from './models';


/*
          "total": number;
    
    "amount": number;
    
    "start": number;
    
    "sortby": string;
    
    "order": string;
    "predefinedEntities": Array<models.InlineResponse2004PredefinedEntities>;

*/

describe('Interface : InlineResponse2005  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it("should create object ",()=>{
    let agents: Array<models.InlineResponse2005Agents>=[];

      let vObj:InlineResponse2005={

            total:0,
            amount:0,
            start:0,
            sortby:"desc",
            order:""
            ,agents:agents
        };
    expect(vObj).toBeTruthy();
  });

  }
);

200