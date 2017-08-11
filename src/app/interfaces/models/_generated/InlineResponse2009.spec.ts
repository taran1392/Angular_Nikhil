import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2009} from './InlineResponse2009';
import * as models from './models';


/*
 "id": string;
    
    "name"?: string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "featureids"?: Array<string>;*/

describe('Interface : InlineResponse2009  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureids: Array<string>
      let vObj:InlineResponse2009={id:"",name:"",attributes:attributes, 
      description:"",featureIds:featureids
    };
    expect(vObj).toBeTruthy();
  });


  }
);

