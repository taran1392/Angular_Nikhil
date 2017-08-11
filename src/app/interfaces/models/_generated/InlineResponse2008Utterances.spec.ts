import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2008Utterances} from './InlineResponse2008Utterances';
import * as models from './models';


/*
id": string;
    
    "tokenizedString": Array<string>;
    
    "entities": Array<models.InlineResponse2008Entities>; 
*/

describe('Interface : InlineResponse2008Utterances  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let entities:Array<models.InlineResponse2008Entities>=[];
      let tokenizedString: Array<string>=[];
      let vObj:InlineResponse2008Utterances={id:"",entities:entities,tokenizedString:tokenizedString      
    
                        };
    expect(vObj).toBeTruthy();
  });
  }
);

