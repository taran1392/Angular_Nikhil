import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2005NoIncludeIntents} from './InlineResponse2005NoIncludeIntents';
import * as models from './models';

/*
"agentId": string;
    
    "intentId": string;
*/

describe('Interface : InlineResponse2005NoIncludeIntents  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    let entityIds:Array<string>=[]
      let obj:InlineResponse2005NoIncludeIntents={agentId:"",intentId:""}
        expect(obj).toBeTruthy();
  });


  


  }
);

