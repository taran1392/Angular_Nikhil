import { TestBed, inject } from '@angular/core/testing';

import  {Body10} from './Body10';
import * as models from './models';


/*
"id": string;
    
   
    "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "reference"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "featureIds": Array<string>;*/

describe('Interface : Body10  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:Body10={id:"",name:"",attributes:attributes, description:"",
                        featureIds:featureIds
                        };
    expect(vObj).toBeTruthy();
  });



  }
);

