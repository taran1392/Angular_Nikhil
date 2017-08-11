import { TestBed, inject } from '@angular/core/testing';

import  {EntityAlias} from './EntityAlias';
import * as models from './models';


/*"entityId"?: string;
    
    "entailingTokenNumbers"?: Array<number>;
*/

describe('Interface : EntityAlias  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object without any property",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:EntityAlias={};
    expect(vObj).toBeTruthy();
  });

  
  it("should create  object with one property",()=>{
      let vObj:EntityAlias={entityId:""};
    expect(vObj).toBeTruthy();
  });

  it("should create  object with all the properties",()=>{
    let entailingTokenNumbers:Array<number>=[];
      let vObj:EntityAlias={entityId:"",entailingTokenNumbers:entailingTokenNumbers};
    expect(vObj).toBeTruthy();
  });



  }
);

