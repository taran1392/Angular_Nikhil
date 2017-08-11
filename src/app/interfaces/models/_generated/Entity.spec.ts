import { TestBed, inject } from '@angular/core/testing';

import  {Entity} from './Entity';
import * as models from './models';


/*
"id": string;
    
   
    "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "reference"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "featureIds": Array<string>;*/

describe('Interface : Entity  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:Entity={id:"",name:"",attributes:attributes, description:"",
                        featureIds:featureIds
                        };
    expect(vObj).toBeTruthy();
  });



  }
);

