import { TestBed, inject } from '@angular/core/testing';

import  {Body3} from './Body3';
import * as models from './models';


/*
"id": string;
    
    "name": string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "noIncludeIntents": Array<models.InlineResponse2005NoIncludeIntents>;
    
    "intentIds": Array<string>;
    
    "entityIds": Array<string>;*/

describe('Interface : Body3  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:Body3={id:"",name:"",attributes:attributes, description:"",
                        intentIds:featureIds,entityIds:featureIds
                        ,noIncludeIntents:noIncludeIntents
                        };
    expect(vObj).toBeTruthy();
  });



  }
);

