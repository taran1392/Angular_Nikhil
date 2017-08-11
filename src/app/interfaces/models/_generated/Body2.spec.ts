import { TestBed, inject } from '@angular/core/testing';

import  {Body2} from './Body2';
import * as models from './models';


/*
"id": string;
    
    "name": string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "noIncludeIntents": Array<models.InlineResponse2005NoIncludeIntents>;
    
    "intentIds": Array<string>;
    
    "entityIds": Array<string>;*/

describe('Interface : Body2  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:Body2={id:"",name:"",attributes:attributes, description:"",
                        intentIds:featureIds,entityIds:featureIds
                        ,noIncludeIntents:noIncludeIntents
                        };
    expect(vObj).toBeTruthy();
  });



  }
);

