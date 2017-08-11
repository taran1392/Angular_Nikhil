import { TestBed, inject } from '@angular/core/testing';

import  {Body} from './Body';
import * as models from './models';


describe('Interface : Body  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
     let vObj:Body={id:"",attributes:attributes,featureIds:featureIds};
    expect(vObj).toBeTruthy();
  });



  }
);

