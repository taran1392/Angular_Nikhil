import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse200} from './InlineResponse200';
import * as models from './models';


/*
    "status"?: InlineResponse200.StatusEnum;
    "subsystems"?: Array<models.InlineResponse200Subsystems>;
*/

describe('Interface : InlineResponse200  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only without any property",()=>{
     
      let vObj:InlineResponse200={
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
      let subsystems:Array<models.InlineResponse200Subsystems>=[]
    

      let vObj:InlineResponse200={
          status:InlineResponse200.StatusEnum.Down,
        subsystems:subsystems 
        };
    expect(vObj).toBeTruthy();
  });

  }
);

200