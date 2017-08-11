import { TestBed, inject } from '@angular/core/testing';

import  {Body9} from './Body9';
import * as models from './models';


/*
    "id": string;
    
    "tokenizedString": Array<string>;
    
    "entities": Array<models.InlineResponse2008Entities>;
*/

describe('Interface : Body9  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let entities:Array<models.InlineResponse2008Entities>=[];
      let tokenizedString:Array<string>=[];
      let vObj:Body9={id:"",tokenizedString:tokenizedString,entities:entities                      
     };
    expect(vObj).toBeTruthy();
  });
  
 

  }
);

