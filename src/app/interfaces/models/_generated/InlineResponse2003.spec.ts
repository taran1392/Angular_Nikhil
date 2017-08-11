import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2003} from './InlineResponse2003';
import * as models from './models';


/*
"timestamp": string;
    
    "action": InlineResponse2003.ActionEnum;
    
    "target": string;
*/

describe('Interface : InlineResponse2003  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it("should create object ",()=>{
    

      let vObj:InlineResponse2003={
        timestamp:"",
        action:InlineResponse2003.ActionEnum.Created,
        target:""    
    };
    expect(vObj).toBeTruthy();
  });

  }
);

200