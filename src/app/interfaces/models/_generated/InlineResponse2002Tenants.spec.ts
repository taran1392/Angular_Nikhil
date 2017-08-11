import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2002Tenants} from './InlineResponse2002Tenants';
import * as models from './models';


/*"id": string;
    "name": string;
    
    */

describe('Interface : InlineResponse2002Tenants  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create object",()=>{
     
      let vObj:InlineResponse2002Tenants={
            id:"",
            name:""
      };
    expect(vObj).toBeTruthy();
  });


 
  }
);

200