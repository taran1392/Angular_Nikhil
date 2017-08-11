import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2008Entities} from './InlineResponse2008Entities';
import * as models from './models';


/*
    "entityId"?: string;
    
    "entailingTokenNumbers"?: Array<number>;

*/

describe('Interface : InlineResponse2008Entities  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  
  it("should create  object",()=>{
      let entailingTokenNumbers: Array<number>
      let vObj:InlineResponse2008Entities={
          entityId:"",
          entailingTokenNumbers:entailingTokenNumbers
      };
    expect(vObj).toBeTruthy();
  });


  }
);

