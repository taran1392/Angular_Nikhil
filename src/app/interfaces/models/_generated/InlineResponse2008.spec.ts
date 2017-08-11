import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2008} from './InlineResponse2008';
import * as models from './models';


/*
"total": number;
    
    "amount": number;
    
    "start": number;
    "utterances": Array<models.InlineResponse2008Utterances

*/

describe('Interface : InlineResponse2008  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2008Utterances>=[];
      
      let vObj:InlineResponse2008={

        total:0,
        amount:0,
        start:0,
        utterances:attributes
      };                     
    expect(vObj).toBeTruthy();
  });
  

  }
);

