import { TestBed, inject } from '@angular/core/testing';

import  {Body1} from './Body1';
import * as models from './models';


describe('Interface : Body1  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
     let vObj:Body1={id:"",attributes:attributes,featureIds:featureIds};
    expect(vObj).toBeTruthy();
  });



  }
);

