import { TestBed, inject } from '@angular/core/testing';

import  {GenericResponse} from './GenericResponse';
import * as models from './models';


/*
"status": GenericResponse.StatusEnum;
    "message"?: string;
    "code"?: string;
    "fields"?: Array<string>;
*/

describe('Interface : GenericResponse  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only with Status field",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:GenericResponse={
          status:GenericResponse.StatusEnum.Fail,
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
      let fields:Array<string>=[]
    
      let vObj:GenericResponse={
          status:GenericResponse.StatusEnum.Fail,
          message:"",
            code:"",
            fields:fields       
      };
    expect(vObj).toBeTruthy();
  });

  }
);

