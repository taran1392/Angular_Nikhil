import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2004PredefinedEntities} from './InlineResponse2004PredefinedEntities';
import * as models from './models';


/*
"status": InlineResponse2004PredefinedEntities.StatusEnum;
    "message"?: string;
    "code"?: string;
    "fields"?: Array<string>;
*/

describe('Interface : InlineResponse2004PredefinedEntities  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });

  it("should create  object with optional fields",()=>{
      let featureids:Array<string>=[]
    let attributes:Array<models.InlineResponse2004Attributes>=[];
      let vObj:InlineResponse2004PredefinedEntities={
        id:"",
        featureIds:featureids
        ,attributes:attributes

    };
    expect(vObj).toBeTruthy();
  });

  }
);

