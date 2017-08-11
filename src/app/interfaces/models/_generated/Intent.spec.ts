import { TestBed, inject } from '@angular/core/testing';

import  {Intent} from './Intent';
import * as models from './models';


/*
 "id": string;
    
    "name"?: string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "utteranceIds"?: Array<string>;*/

describe('Interface : Intent  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      
      let vObj:Intent={id:"",name:"",attributes:attributes, description:"",
                      
    
                        };
    expect(vObj).toBeTruthy();
  });
  
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let utterancesids: Array<string>
      let vObj:Intent={id:"",name:"",attributes:attributes, 
      description:"",utteranceIds:utterancesids
    };
    expect(vObj).toBeTruthy();
  });


  }
);

