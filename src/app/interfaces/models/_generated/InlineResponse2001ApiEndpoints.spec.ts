import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2001ApiEndpoints} from './InlineResponse2001ApiEndpoints';
import * as models from './models';


/*
   "version"?: string;
    "endpoint"?: string;
*/

describe('Interface : InlineResponse2001ApiEndpoints  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only without any property",()=>{
     
      let vObj:InlineResponse2001ApiEndpoints={
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
    

      let vObj:InlineResponse2001ApiEndpoints={
        version:"",
        endpoint:""
    };
    expect(vObj).toBeTruthy();
  });

  }
);

200