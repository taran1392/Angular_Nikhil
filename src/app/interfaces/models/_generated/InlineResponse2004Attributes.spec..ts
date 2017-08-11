import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2004Attributes} from './InlineResponse2004Attributes';
import * as models from './models';
import {} from 'jasmine';

export class test implements InlineResponse2004Attributes{
name:string;
value:string
}

/*
"name": string;
    
    "value": string;
*/

describe('Interface : InlineResponse2004Attributes  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it("should create object ",()=>{
    

      let vObj:InlineResponse2004Attributes={
            name:"",
            value:""
    };
          let o={
            name:"",
            value:""
    };

    var b=o instanceof test;
    expect(vObj).toBeTruthy();
  });

  }
);
