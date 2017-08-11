import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2001} from './InlineResponse2001';
import * as models from './models';


/*
 "version"?: string;
    "buildid"?: string;
    "apiEndpoints"?: Array<models.InlineResponse2001ApiEndpoints>;
*/

describe('Interface : InlineResponse2001  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only without any property",()=>{
     
      let vObj:InlineResponse2001={
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
      let apiEndpoints:Array<models.InlineResponse2001ApiEndpoints>=[]
    
      let vObj:InlineResponse2001={
        version:"",
        buildid:"",
        apiEndpoints:apiEndpoints
    };
    expect(vObj).toBeTruthy();
  });

  }
);

200