import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2002} from './InlineResponse2002';
import * as models from './models';


/*
      "tenants": Array<models.InlineResponse2002Tenants>;
*/

describe('Interface : InlineResponse2002  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create object",()=>{
let tenants: Array<models.InlineResponse2002Tenants>=[];
     
      let vObj:InlineResponse2002={
          tenants:tenants
      };
    expect(vObj).toBeTruthy();
  });


  
  }
);

200