import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2004} from './InlineResponse2004';
import * as models from './models';


/*
          "total": number;
    
    "amount": number;
    
    "start": number;
    
    "sortby": string;
    
    "order": string;
    "predefinedEntities": Array<models.InlineResponse2004PredefinedEntities>;

*/

describe('Interface : InlineResponse2004  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });


  it("should create object ",()=>{
    let predefinedEntities: Array<models.InlineResponse2004PredefinedEntities>=[];

      let vObj:InlineResponse2004={

            total:0,
            amount:0,
            start:0,
            sortby:"desc",
            order:""
            ,predefinedEntities:predefinedEntities
        };
    expect(vObj).toBeTruthy();
  });

  }
);

200