import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2006} from './InlineResponse2006';
import * as models from './models';

/*
"id": string;
    
    "values":Array< string>;
*/

describe('Interface : InlineResponse2006  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
    let values:Array<string>=[]
      let obj:InlineResponse2006={id:"",values:values}
        expect(obj).toBeTruthy();
  });


  


  }
);

