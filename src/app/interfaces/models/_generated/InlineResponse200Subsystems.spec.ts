import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse200Subsystems} from './InlineResponse200Subsystems';
import * as models from './models';


/*
      "system"?: string;
    "status"?: InlineResponse200Subsystems.StatusEnum;
    "details"?: string;;
*/

describe('Interface : InlineResponse200Subsystems  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only without any property",()=>{
     
      let vObj:InlineResponse200Subsystems={
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
      

      let vObj:InlineResponse200Subsystems={
          status:InlineResponse200Subsystems.StatusEnum.Down,
            system:"",
            details:""
        };
    expect(vObj).toBeTruthy();
  });

  }
);

200